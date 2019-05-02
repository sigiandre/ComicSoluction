using Comics.Domain.Entities;
using Comics.Domain.Interfaces;
using Comics.Site.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Comics.Site.Tests
{
    public class RevistasControllerTests
    {
        [Fact]
        public void Index_DevuelveViewResult_ConListaComics()
        {
            // arrange
            var mockRepo = new Mock<IComicRepository>();
            mockRepo.Setup(repo => repo.TraerTodos())
                .Returns(TraerComicslocal());
            var controller = new RevistasController(mockRepo.Object);

            // act
            var resultado = controller.Index();

            // assert
            var viewResult = Assert.IsType<ViewResult>(resultado);
            var model = Assert.IsAssignableFrom<IEnumerable<Comic>>(viewResult.ViewData.Model);
            Assert.Equal(2, model.Count());
        }

        private IQueryable<Comic> TraerComicslocal()
        {
            var comics = new List<Comic>();
            comics.Add(new Comic()
            {
                Id = 1,
                Nombre = "Superman",
                Año = "2000",
                FechaRegistro = new DateTime(2000,1,1),
                Foto = "Superman.jpg"
            });
            comics.Add(new Comic()
            {
                Id = 2,
                Nombre = "Batman",
                Año = "2010",
                FechaRegistro = new DateTime(2010, 1, 1),
                Foto = "Batman.jpg"
            });
            return comics.AsQueryable();
        }
    }
}
