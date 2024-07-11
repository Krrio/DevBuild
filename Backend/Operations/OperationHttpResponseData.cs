namespace DevBuild.Backend.Operations
{
    public class OperationHttpResponseData<T> where T : class
    {

        public static OperationHttpResponseData<T> FromOperationResult(OperationResult<T> result, bool exposeData = false)
        {
            var responseData = new OperationHttpResponseData<T>()
            {
                ErrorCode = result.ErrorCode.ToString()
            };

            if (exposeData)
            {
                responseData.Data = result.Data;
            }

            return responseData;
        }

        public string ErrorCode
        {
            get; private set;
        }

        public object Data
        {
            get; private set;
        }
    }
}
