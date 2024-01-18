namespace be.BusinessLogicServices.Storage;

public interface IFileStorageService
{
    /// <summary>
    /// Deletes a file from the storage
    /// </summary>
    /// <param name="fileLocation"></param>
    /// <returns></returns>
    Task DeleteFile(string fileLocation);
    
    /// <summary>
    /// Downloads a file from the storage
    /// </summary>
    /// <param name="fileLocation"></param>
    /// <returns></returns>
    Task<Stream> DownloadFile(string fileLocation);
    
    /// <summary>
    /// Loads a file into the storage
    /// </summary>
    /// <param name="fileStream"></param>
    /// <returns></returns>
    Task<string> UploadFile(Stream fileStream);
}