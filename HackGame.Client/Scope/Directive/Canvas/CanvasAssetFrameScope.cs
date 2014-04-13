using System.Runtime.CompilerServices;
using HackGame.Client.Services;

namespace HackGame.Client.Scope.Directive.Canvas
{

    public class CanvasAssetFrameScope : ManagedScope
    {
         

        [IntrinsicProperty]
        public bool Inline { get; set; }
        [IntrinsicProperty]
        public int Width { get; set; }
        [IntrinsicProperty]
        public int Height { get; set; }

    }
}
