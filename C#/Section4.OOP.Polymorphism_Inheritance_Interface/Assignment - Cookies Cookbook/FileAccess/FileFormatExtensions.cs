// Welcome to the Cookies Cookbook application
namespace CookiesCookbook.FileAccess;
public static class FileFormatExtensions
{
    public static string AsFileExtension(this FileFormat fileFormat) =>
        fileFormat == FileFormat.Json ? "json" : "txt";
}

