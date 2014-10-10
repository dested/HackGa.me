using System.Runtime.CompilerServices;
using HackGame.Client.Level;
using jQueryApi;

namespace HackGame.Client
{
    public class Program
    {
        [IntrinsicProperty]
        public Manager Manager { get; set; }

        public Program()
        {
            Manager = new Manager();
            
            jQuery.OnDocumentReady(() =>
            {
                Manager.Init();
//                BuildAngular.Setup();
            });


        }

        public static void Main()
        {
            new Program();
        } 
    }
}