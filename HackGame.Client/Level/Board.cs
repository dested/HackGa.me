using System;
using System.Html;
using System.Runtime.CompilerServices;
using HackGame.Client.Utils;
using jQueryApi;

namespace HackGame.Client.Level
{
    public class Board
    {
        public Board()
        {
        }
    }

    public class Manager
    {
        [IntrinsicProperty]
        CanvasInformation Canvas { get; set; }

        public Manager()
        {

        }

        public void Init()
        {
            Canvas = new CanvasInformation(Document.GetElementById("board"));




            Window.AddEventListener("resize", e => resizeCanvas(true));
            jQuery.Document.Resize(e => resizeCanvas(true));



            Window.SetInterval(Tick, 1000 / 60);
            Window.SetInterval(Render, 1000 / 60);
            resizeCanvas(true);


            Character = new Character(new CharacterState()
            {
                Location = new Point(50, 200)
            });

        }

        public Character Character { get; set; }

        public void resizeCanvas(bool resetOverride)
        {
            var canvasWidth = jQuery.Window.GetWidth();
            var canvasHeight = jQuery.Window.GetHeight();

            Canvas.JElement.Attribute("width", canvasWidth.ToString());
            Canvas.JElement.Attribute("height", canvasHeight.ToString());
        }

        public void Tick()
        {
            Character.Tick(new TimeSpan(0));
        }

        public void Render()
        {
            Canvas.Clear();
            Character.Render(Canvas.Context, new TimeSpan(0));
        }
    }
}