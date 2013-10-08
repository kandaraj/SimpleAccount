﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SimpleAccount.Web.Controllers
{
    public class IndexController : Controller
    {
        /// <summary>
        /// A simple Home page
        /// </summary>
        /// <returns>Home page view</returns>
        public ActionResult Index()
        {
            return View();
        }

    }
}
