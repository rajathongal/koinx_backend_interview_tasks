exports._requiredVaulesChecker = async (request, response, required) => {
    try {
        if(required && required.length > 0) {
            const invalidEntries = [];
            required.forEach(item => {
                if (!Object.keys(request.body).includes(item))
                    invalidEntries.push(item);
            });
            if (invalidEntries.length > 0) {
                return response.status(404).json({
                    success: false,
                    message: "Please provide " + invalidEntries.join(", ")
                });
            }
            Object.entries(request.body).forEach(item => {
                if(typeof(item[1]) !== "boolean" && typeof(item[1]) !== "number") {
                    if (item[1] === null || item[1].trim().length === 0){
                        invalidEntries.push(item[0]);
                    }
                }
            });
            if (invalidEntries.length > 0) {
                return response.status(404).json({
                    success: false,
                    message: "Please provide valid values for " + invalidEntries.join(", ")
                });
            }
            
            return true;
            
        } else {
            return false;
        }
    } catch (error) {
        return response.status(504).json({
            success: false,
            error: error.message
        });
    }
}