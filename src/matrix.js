
/** Class aggregating matrix methods. */
class matrixLib{

    /**
     * Checks if a pair of matricies are equal in size
     * @param {number[]} A - The matrix to check
     * @param {number[]} B - The second to check
     * @return {bool} Result if the dimension of the given matricies are equal
     */
    static isValidMatrixPair(A, B){
        if (A.length !== B.length){
            return false;
        }

        if (!(Array.isArray(A[0]) === Array.isArray(B[0]))){
            return false;
        }

        for (let i = 0; i < A.length; i++){
            if (A[i].length !== B[i].length){
                return false;
            }
        }
        
        return true;
    }

    /**
     * Adds constant c to each item in the matrix
     * @param {number[]} A - The matrix to add c to
     * @param {number[]} c - value to add to matrix A
     * @return {number[]} Matrix result from the adding C to each element of A
     */
    static addMatrixC(A, c){
        const addFunc = (i, j) =>{
            return i + j;
        };

        let ret = null;
        if (Array.isArray(A[0])){
            let B = Array(A.length).fill([]);
            for (let i = 0; i < A.length; i++){
                for (let j = 0; j < A[i].length; j++){
                    B[i][j] = c
                }
            }
            ret = matrixLib.matrixOpperation(A, B, addFunc);
        } else {
            ret = matrixLib.matrixOpperation1D(A, Array(A.length).fill(c), addFunc);
        }
        return ret;
    }

    /**
     * Subtracts constant c to each item in the matrix
     * @param {number[]} A - The matrix to sub c to
     * @param {number[]} c - value to sub to matrix A
     * @return {number[]} Matrix result from the subtracting C to each element of A
     */
    static subMatrixC(A, c){
        const subFunc = (i, j) =>{
            return i - j;
        };

        let ret = null;
        if (Array.isArray(A[0])){
            let B = Array(A.length).fill([]);
            for (let i = 0; i < A.length; i++){
                for (let j = 0; j < A[i].length; j++){
                    B[i][j] = c
                }
            }
            ret = matrixLib.matrixOpperation(A, B, subFunc);
        } else {
            ret = matrixLib.matrixOpperation1D(A, Array(A.length).fill(c), subFunc);
        }
        return ret;
    }

    /**
     * Adds matrix A to matrix B
     * @param {number[]} A - Matrix input A
     * @param {number[]} B - Matrix input B
     * @return {number[]} Matrix result from adding A and B
     */
    static addMatrix(A, B){
        const addFunc = (i, j) =>{
            return i + j;
        };

        let ret = null;
        if (Array.isArray(A[0])){
            ret = matrixLib.matrixOpperation(A, B, addFunc);
        } else {
            ret = matrixLib.matrixOpperation1D(A, B, addFunc);
        }
        return ret;
    }

    /**
     * Subtracts matrix B from matrix A
     * @param {number[]} A - Matrix input A
     * @param {number[]} B - Matrix input B
     * @return {number[]} Matrix result from A - B
     */
    static subMatrix(A, B){
        const subFunc = (i, j) =>{
            return i - j;
        };

        let ret = null;
        if (Array.isArray(A[0])){
            ret = matrixLib.matrixOpperation(A, B, subFunc);
        } else {
            ret = matrixLib.matrixOpperation1D(A, B, subFunc);
        }
        return ret;
    }

    /**
     * Operates on the given matricies with func (for 2D dim matrices)
     * @param {number[]} A - The matrix to sum
     * @param {number[]} B - The second to sum
     * @return {number[]} Numerical evaluation of matrix A and B
     */
    static matrixOpperation(A, B, func){
        let ret = [];
        for (let i = 0; i < A.length; i++){
            let row = [];
            for (let j = 0; j < A[i].length; j++){
                row[j] = func(A[i][j], B[i][j]);
            }
            ret[i] = row;
        }
        return ret;
    }

    /**
     * Operates on the given matricies with func (for 1 dim matrices)
     * @param {number[]} A - The matrix to sum
     * @param {number[]} B - The second to sum
     * @return {number[]} Numerical evaluation of matrix A and B
     */
    static matrixOpperation1D(A, B, func){
        let ret = [];
        for (let i = 0; i < A.length; i++){
            ret[i] = func(A[i], B[i]);
        }
        return ret;
    }
}


t = [[1,2,3], [2,3,4], [4,5,6]]
t1 = [[1,2,3], [2,3,4], [4,5,2,1]]

z = [1,2,3];
console.log(matrixLib.subMatrixC(z, 3));

module.exports = {
    matrixLib: matrixLib,
};