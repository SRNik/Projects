
namespace Section4.OOP.Polymorphism_Inheritance_Interface.Polymorphism.Extensions
{
    public static class StringExtensions
    {
        public static int CountLines(this string input) => input.Split(Environment.NewLine).Length; //The extension method must always be static. this keyword must be used for extension methods. No argument needed when calling 
                                                                                                    //extended method because they work as if they were instance methods

    }
}
