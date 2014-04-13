using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace HackGame.Client.Utils
{
    public static class Extensions
    {
        [InlineCode("{o}")]
        public static dynamic Me(this object o)
        {
            return o;
        }

        [InlineCode("{o}")]

        public static T Me<T>(this object o)
        {
            return default(T);
        }

        [InlineCode("{o}")]

        public static T[] Array<T>(this List<T> o)
        {
            return new T[0];
        }
    }
}