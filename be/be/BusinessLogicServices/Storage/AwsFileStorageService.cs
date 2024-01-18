namespace be.BusinessLogicServices.Storage;

public class AwsFileStorageService : IFileStorageService
{
    public Task DeleteFile(string fileLocation)
    {
        throw new NotImplementedException();
    }

    public Task<Stream> DownloadFile(string fileLocation)
    {
        throw new NotImplementedException();
    }

    public Task<string> UploadFile(Stream fileStream)
    {
        throw new NotImplementedException();
    }
}