using System.Data.SqlClient;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Org.BouncyCastle.Tls.Crypto.Impl.BC;
using webApi.Models;
using System.Text;
using Microsoft.AspNetCore.Identity;
using System;
using System.Web.Http.Results;

namespace webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static User user = new User();
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("Register")]
        public async Task<ActionResult<User>> Register(UserDto request, Guid guid)
        {
            string query = @"
                           insert into dbo.Users(UserID,Name,Email,PasswordHash,PasswordSalt)
                           values (@UserID,@Name,@Email,@PasswordHash,@PasswordSalt)
                            ";

            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);
            string psw = PasswordHash(request.Password);

            Guid guid1 = Guid.NewGuid();
            guid = guid1;

            user.UserID = guid;
            user.Username = request.Username;
            user.Email = request.Email;
            user.PasswordHash = Encoding.UTF8.GetBytes(psw);
            user.PasswordSalt = passwordSalt;

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ContactAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@UserID", Guid.NewGuid());
                    myCommand.Parameters.AddWithValue("@Name", request.Username);
                    myCommand.Parameters.AddWithValue("@Email", request.Email);
                    myCommand.Parameters.AddWithValue("@PasswordHash", psw);
                    myCommand.Parameters.AddWithValue("@PasswordSalt", passwordSalt);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return Ok(user);
        }

        [HttpGet("GetAllUsers")]
        public JsonResult Get()
        {
            string query = @"select UserID,Name,Email,PasswordHash,PasswordSalt from dbo.Users";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ContactAppCon");
            SqlDataReader myReader;
            var result = new List<User>();
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    while (myReader.Read())
                    {
                        result.Add(new User
                        {
                            UserID = (Guid)myReader["UserID"],
                            Username = myReader["Name"].ToString(),
                            Email = myReader["Email"].ToString(),
                            PasswordHash = Encoding.UTF8.GetBytes((string)myReader["PasswordHash"]),
                            PasswordSalt = Encoding.UTF8.GetBytes((string)myReader["PasswordSalt"]),
                        });
                    }
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(result);
        }

        [HttpPost("LoginSql")]
        public async Task<ActionResult<string>> LoginSql(Login request)
        {
            string query = @"
                           SELECT Name,PasswordHash FROM dbo.Users WHERE Name = @Name
                            ";

            string psw = PasswordHash(request.Password);


            user.Username = request.Username;
            user.PasswordHash = Encoding.UTF8.GetBytes(psw);

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ContactAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();

                using (SqlCommand command = new SqlCommand(query, myCon))
                {
                    command.Parameters.AddWithValue("@Name", request.Username);
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        var nameMatched = false;
                        if (reader.Read())
                        {
                            nameMatched = true;
                            if(reader.GetValue(0).ToString() == request.Username.ToString() && reader.GetValue(1).ToString() == psw.ToString())    
                            {
                                string token = CreateToken(user);
                                return Ok(token);
                            }

                        }
                        if (!nameMatched)
                        {
                            return BadRequest("Invalid credentials!");
                        }
                    }
                }
            }
            return Ok("Login successful!");
        }

        [HttpPost("Login")]
        public async Task<ActionResult<string>> Login(Login request)
        {
            if(user.Username != request.Username)
            {
                return BadRequest("User not found.");
            }

            if(!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
            {
                return BadRequest("Password incorect!");
            }

            string token = CreateToken(user);
            return Ok(token);
        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            { 
                new Claim(ClaimTypes.Name, user.Username)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }

        string PasswordHash(string password)
        {
            var sha = SHA256.Create();
            var asByteArray = Encoding.Default.GetBytes(password);
            var hashedPassword = sha.ComputeHash(asByteArray);
            return Convert.ToBase64String(hashedPassword);
        }



    }
}
