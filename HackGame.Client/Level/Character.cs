using System;
using System.Html;
using System.Html.Media.Graphics;

namespace HackGame.Client.Level
{
    public class Character
    {

        public CharacterBody Limbs { get; set; }
        public CharacterState State { get; set; }

        public Character(CharacterState startingState)
        {

            State = startingState;
            Limbs = new CharacterBody();
            var standingSchema = new CharacterBodySchema();
            standingSchema.Init();
            Limbs.ApplySchema(standingSchema);
        }

        public void Tick(TimeSpan updateTime)
        {
            TickPhysics(updateTime);
            Limbs.Tick(updateTime, State);
        }

        private void TickPhysics(TimeSpan updateTime)
        {
            State.Location.X += 1;
        }

        public void Render(CanvasRenderingContext2D context, TimeSpan updateTime)
        {
            context.Save();
            context.Translate(State.Location.X, State.Location.Y);

            context.Save();
            context.Translate(-Limbs.Head.Image.Width / 2, -Limbs.Head.Image.Height / 2);
            context.DrawImage(Limbs.Head.Image, Limbs.Head.Offset.X, Limbs.Head.Offset.Y);
            context.Restore();

            context.Save();
            context.Translate(-Limbs.Body.Image.Width / 2, -Limbs.Body.Image.Height / 2);
            context.DrawImage(Limbs.Body.Image, Limbs.Body.Offset.X, Limbs.Body.Offset.Y);
            context.Restore();


            context.Save();
            context.Translate(-Limbs.LeftArm.Image.Width / 2, -Limbs.LeftArm.Image.Height / 2);
            context.DrawImage(Limbs.LeftArm.Image, Limbs.LeftArm.Offset.X, Limbs.LeftArm.Offset.Y);
            context.Restore();
            context.Save();
            context.Translate(-Limbs.RightArm.Image.Width / 2, -Limbs.RightArm.Image.Height / 2);
            context.DrawImage(Limbs.RightArm.Image, Limbs.RightArm.Offset.X, Limbs.RightArm.Offset.Y);
            context.Restore();

            context.Save();
            context.Translate(-Limbs.LeftLeg.Image.Width / 2, -Limbs.LeftLeg.Image.Height / 2);
            context.DrawImage(Limbs.LeftLeg.Image, Limbs.LeftLeg.Offset.X, Limbs.LeftLeg.Offset.Y);
            context.Restore();
            context.Save();
            context.Translate(-Limbs.RightLeg.Image.Width / 2, -Limbs.RightLeg.Image.Height / 2);
            context.DrawImage(Limbs.RightLeg.Image, Limbs.RightLeg.Offset.X, Limbs.RightLeg.Offset.Y);
            context.Restore();


            context.Restore();
        }
    }

    public class CharacterState
    {
        public Point Location { get; set; }
    }

    public class CharacterBodySchema
    {
        public CharacterBodyPart LeftLeg { get; set; }
        public CharacterBodyPart RightLeg { get; set; }
        public CharacterBodyPart LeftArm { get; set; }
        public CharacterBodyPart RightArm { get; set; }
        public CharacterBodyPart Head { get; set; }
        public CharacterBodyPart Body { get; set; }

        public void Init()
        {
            LeftLeg = new CharacterBodyPart() { Image = ImageUtil.LoadImage("/images/character/leftLeg.png"), Offset = new Point(-15, 40) };
            RightLeg = new CharacterBodyPart() { Image = ImageUtil.LoadImage("/images/character/rightLeg.png"), Offset = new Point(20, 40) };
            LeftArm = new CharacterBodyPart() { Image = ImageUtil.LoadImage("/images/character/leftArm.png"), Offset = new Point(-15, -10) };
            RightArm = new CharacterBodyPart() { Image = ImageUtil.LoadImage("/images/character/rightArm.png"), Offset = new Point(25, -10) };
            Head = new CharacterBodyPart() { Image = ImageUtil.LoadImage("/images/character/head.png"), Offset = new Point(0, -40) };
            Body = new CharacterBodyPart() { Image = ImageUtil.LoadImage("/images/character/body.png"), Offset = new Point(0, 0) };
        }

        public void TickCharacter(TimeSpan updateTime, CharacterState characterState)
        {

        }

    }

    public static class ImageUtil
    {
        public static ImageElement LoadImage(string imageSrc)
        {
            var image = (ImageElement)Document.CreateElement("img");
            image.Src = imageSrc;
            return image;
        }
    }

    public class CharacterBody
    {
        public CharacterBodyPart LeftLeg { get; set; }
        public CharacterBodyPart RightLeg { get; set; }
        public CharacterBodyPart LeftArm { get; set; }
        public CharacterBodyPart RightArm { get; set; }
        public CharacterBodyPart Head { get; set; }
        public CharacterBodyPart Body { get; set; }
        public Action<TimeSpan, CharacterState> TickCharacter { get; set; }

        public void ApplySchema(CharacterBodySchema schema)
        {
            LeftLeg = schema.LeftLeg;
            RightLeg = schema.RightLeg;
            LeftArm = schema.LeftArm;
            RightArm = schema.RightArm;
            Head = schema.Head;
            Body = schema.Body;

            TickCharacter = schema.TickCharacter;
        }

        public void Tick(TimeSpan updateTime, CharacterState characterState)
        {
            TickCharacter(updateTime, characterState);
        }
    }

    public class CharacterBodyPart
    {
        public ImageElement Image { get; set; }
        public Point Offset { get; set; }
    }

    public class Point
    {
        public Point(int x, int y)
        {
            X = x;
            Y = y;
        }

        public int X { get; set; }
        public int Y { get; set; }
    }
}