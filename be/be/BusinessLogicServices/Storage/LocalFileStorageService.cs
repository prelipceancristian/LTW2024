namespace be.BusinessLogicServices.Storage;

public class LocalFileStorageService : IFileStorageService
{
    private const string BaseFilePath = "storage";

    public Task DeleteFile(string fileLocation)
    {
        var completeFileLocation = GetFullFilePath(fileLocation);
        File.Delete(completeFileLocation);
        return Task.CompletedTask;
    }

    public async Task<Stream> DownloadFile(string fileLocation)
    {
        var completeFileLocation = GetFullFilePath(fileLocation);
        return await Task.FromResult(File.Open(completeFileLocation, FileMode.Open));
    }

    public async Task<string> UploadFile(Stream fileStream)
    {
        var fileStorageId = Guid.NewGuid().ToString();

        var directoryFullPath = GetFullDirectoryPath();
        if (!Directory.Exists(directoryFullPath))
        {
            Directory.CreateDirectory(directoryFullPath);
        }
        
        var completeFileLocation = GetFullFilePath(fileStorageId);
        await using var fs = File.Open(completeFileLocation, FileMode.Create);
        fileStream.Position = 0;
        await fileStream.CopyToAsync(fs);

        return fileStorageId;
    }

    private static string GetFullDirectoryPath()
    {
        return Path.Combine(Path.GetTempPath(), BaseFilePath);
    }

    private static string GetFullFilePath(string fileStorageId)
    {
        return Path.Combine(GetFullDirectoryPath(), fileStorageId);
    }
}