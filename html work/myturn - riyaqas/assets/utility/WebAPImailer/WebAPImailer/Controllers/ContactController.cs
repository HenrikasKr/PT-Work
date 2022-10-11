using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using webApi.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace WebAPImailer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ContactController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpPost]
        public JsonResult Post(Contact con)
        {
            string query = @"
                           insert into dbo.Contact(ContactName,ContactEmail,ContactSubject,ContactMessage,ContactDate)
                           values (@ContactName,@ContactEmail,@ContactSubject,@ContactMessage,@ContactDate)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ContactAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ContactName", con.ContactName);
                    myCommand.Parameters.AddWithValue("@ContactEmail", con.ContactEmail);
                    myCommand.Parameters.AddWithValue("@ContactSubject", con.ContactSubject);
                    myCommand.Parameters.AddWithValue("@ContactMessage", con.ContactMessage);
                    myCommand.Parameters.AddWithValue("@ContactDate", DateTime.Now);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select ContactId,ContactName,ContactEmail,ContactSubject,ContactMessage,ContactDate from dbo.Contact";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ContactAppCon");
            SqlDataReader myReader;
            var result = new List<Contact>();
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    while (myReader.Read())
                    {
                        result.Add(new Contact
                        {
                            ContactID = (int)(Int64)myReader["ContactID"],
                            ContactName = myReader["ContactName"].ToString(),
                            ContactEmail = myReader["ContactEmail"].ToString(),
                            ContactSubject = myReader["ContactSubject"].ToString(),
                            ContactMessage = myReader["ContactMessage"].ToString(),
                            ContactDate = myReader["ContactDate"].ToString(),
                        }); ;
                    }
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(result);
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                           delete from dbo.Contact
                            where ContactID=@ContactID
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ContactAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ContactID", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}
