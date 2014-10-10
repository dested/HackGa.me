using System.Html;
using System.Html.Media.Graphics;
using System.Runtime.CompilerServices;
using jQueryApi;

namespace HackGame.Client.Utils
{
    public class CanvasInformation
    {
        private static CanvasElement blackPixel;
        [IntrinsicProperty]
        public CanvasRenderingContext2D Context { get; set; }
        [IntrinsicProperty]
        public jQueryObject JElement { get; set; }
        [IntrinsicProperty]
        public CanvasElement Element { get; set; }
        public static CanvasElement BlackPixel
        {
            get
            {
                if (blackPixel == null) {
                    var m = Create(0, 0,false);

                    m.Context.FillStyle = "black";
                    m.Context.FillRect(0, 0, 1, 1);

                    blackPixel = m.Element;
                }
                return blackPixel;
            }
        }

        public CanvasInformation(CanvasRenderingContext2D context, jQueryObject jElement)
        {
            Context = context;
            JElement = jElement;
            Element = (CanvasElement)jElement[0];
        }
        public CanvasInformation(Element ele)
        {
            Context = (CanvasRenderingContext2D) ((CanvasElement) ele).GetContext(CanvasContextId.Render2D);
            JElement = jQuery.FromElement(ele);
            Element = ((CanvasElement)ele);
        }

        public static CanvasInformation Create(int w, int h, bool pixelated)
        {
            var canvas = (CanvasElement) Document.CreateElement("canvas");
            return Create(canvas, w, h,pixelated);
        }

        public static CanvasInformation Create(CanvasElement canvas, int w, int h,bool pixelated)
        {
            if (w == 0) w = 1;
            if (h == 0) h = 1;
            canvas.Width = w;
            canvas.Height = h;

            var ctx = (CanvasRenderingContext2D) canvas.GetContext("2d");

        
            if (pixelated)
            {
                ctx.Me().webkitImageSmoothingEnabled = false;
                ctx.Me().mozImageSmoothingEnabled = false;
                ctx.Me().imageSmoothingEnabled = false;
            }
            return new CanvasInformation(ctx, jQuery.FromElement(canvas));
        }

        public void Clear()
        {
            Element.Width = Element.Width;
        }
    }
}