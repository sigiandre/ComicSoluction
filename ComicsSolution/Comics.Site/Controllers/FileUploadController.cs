using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Comics.Site.Controllers
{
    public class FileUploadController : Controller
    {
        //
        // GET: /FileUpload/

        private readonly IHostingEnvironment _hostingEnvironment;

        public FileUploadController( IHostingEnvironment e)
        {
            this._hostingEnvironment = e;
        }

        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> UploadFile()
        {
            //< init >

            long uploaded_size = 0;
            string new_Filename_on_Server = string.Empty;

            string path_for_Uploaded_Files = _hostingEnvironment.WebRootPath + "\\User_Files\\_Upload_Folder";

            //</ init >



            //< get form_files >

            //IFormFile uploaded_File

            var uploaded_files = Request.Form.Files;

            //</ get form_files >



            //------< @Loop: Uploaded Files >------

            int iCounter = 0;

            string sFiles_uploaded = "";

            foreach (var uploaded_file in uploaded_files)
            {
                //----< Uploaded File >----

                iCounter++;
                uploaded_size += uploaded_file.Length;
                sFiles_uploaded += "\n" + uploaded_file.FileName;

                //< Filename >

                string uploaded_Filename = uploaded_file.FileName;
                new_Filename_on_Server = path_for_Uploaded_Files + "\\" + uploaded_Filename;

                //</ Filename >

                //< Copy File to Target >

                using (FileStream stream = new FileStream(new_Filename_on_Server, FileMode.Create))
                {
                    await uploaded_file.CopyToAsync(stream);
                }

                //< Copy File to Target >

                //----</ Uploaded File >----
            }

            //------</ @Loop: Uploaded Files >------
            //string message = "Upload successful!\n files uploaded:" + iCounter + "\nsize:" + uploaded_size + "\n" + sFiles_uploaded;
            string message = new_Filename_on_Server;

            return Json(message);
        }
    }
}