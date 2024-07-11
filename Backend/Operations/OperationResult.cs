using System.Net;

namespace DevBuild.Backend.Operations
{
    public class OperationResult<T> where T : class
    {
        public bool Success { get; set; }
        public T? Data { get; set; }
        public OperationResultErrorCodes ErrorCode;

        // Factory method for success
        public static OperationResult<T> Ok(T data)
        {
            return new OperationResult<T> { Success = true, Data = data };
        }

        // Factory method for failure
        public static OperationResult<T> Fail(OperationResultErrorCodes errorCode, T? data = null)
        {
            return new OperationResult<T>
            {
                Success = false,
                ErrorCode = errorCode,
                Data = data
            };
        }

        public HttpStatusCode HttpStatusCode
        {
            get
            {
                switch (this.ErrorCode)
                {
                    case OperationResultErrorCodes.OperationFailedInInnerLayer: return HttpStatusCode.InternalServerError;
                    case OperationResultErrorCodes.DuplicationOccured: return HttpStatusCode.Conflict;
                    default: return HttpStatusCode.BadRequest;
                }
            }
        }

        public OperationHttpResponseData<T> HttpData(bool exposeData = false)
        {
            return OperationHttpResponseData<T>.FromOperationResult(this, exposeData);
        }
    }
}
