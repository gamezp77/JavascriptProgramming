using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MYGRAM.Models;

namespace MYGRAM.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
       

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Orders()
        {
            return View();
        }
            public IActionResult Register(string UserInput, string PasswordInput)
        {
            User user = new User();
            user.UserInput = UserInput;
            user.PasswordInput = PasswordInput;
            user.RegisterMessage = $"The user is {UserInput} and the password is {PasswordInput}";
            

            return Json(user);
        }

        public IActionResult GetAllImages()
        {
            List<Image> imagesList = new List<Image>();

            Image newImage = new Image();
            newImage.Despcripton = "Description 1";
            newImage.ImageAlt = "Image 1";
            newImage.ImageId = 1;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);


            newImage = new Image();
            newImage.Despcripton = "Description 2";
            newImage.ImageAlt = "Image 2";
            newImage.ImageId = 2;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 3";
            newImage.ImageAlt = "Image 3";
            newImage.ImageId = 3;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);


            newImage = new Image();
            newImage.Despcripton = "Description 4";
            newImage.ImageAlt = "Image 4";
            newImage.ImageId = 4;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 5";
            newImage.ImageAlt = "Image 5";
            newImage.ImageId = 5;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 6";
            newImage.ImageAlt = "Image 6";
            newImage.ImageId = 6;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);


            newImage = new Image();
            newImage.Despcripton = "Description 7";
            newImage.ImageAlt = "Image 7";
            newImage.ImageId = 7;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 8";
            newImage.ImageAlt = "Image 8";
            newImage.ImageId = 8;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);


            newImage = new Image();
            newImage.Despcripton = "Description 9";
            newImage.ImageAlt = "Image 9";
            newImage.ImageId = 9;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 10";
            newImage.ImageAlt = "Image 10";
            newImage.ImageId = 10;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 11";
            newImage.ImageAlt = "Image 11";
            newImage.ImageId = 11;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);


            newImage = new Image();
            newImage.Despcripton = "Description 12";
            newImage.ImageAlt = "Image 12";
            newImage.ImageId = 12;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 13";
            newImage.ImageAlt = "Image 13";
            newImage.ImageId = 13;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);


            newImage = new Image();
            newImage.Despcripton = "Description 14";
            newImage.ImageAlt = "Image 14";
            newImage.ImageId = 14;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 15";
            newImage.ImageAlt = "Image 15";
            newImage.ImageId = 15;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 16";
            newImage.ImageAlt = "Image 16";
            newImage.ImageId = 16;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);


            newImage = new Image();
            newImage.Despcripton = "Description 17";
            newImage.ImageAlt = "Image 17";
            newImage.ImageId = 17;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 18";
            newImage.ImageAlt = "Image 18";
            newImage.ImageId = 18;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);


            newImage = new Image();
            newImage.Despcripton = "Description 19";
            newImage.ImageAlt = "Image 19";
            newImage.ImageId = 19;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            newImage = new Image();
            newImage.Despcripton = "Description 20";
            newImage.ImageAlt = "Image 20";
            newImage.ImageId = 20;
            newImage.ImagePath = "Some path";
            imagesList.Add(newImage);

            return Json(imagesList);
                }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
