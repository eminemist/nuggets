import java.util.ArrayList;
import java.util.Arrays;

public class Solution {
    public static int[][] plusOne(int[][] A) {
        int n = A.length;
        int[][] p = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                p[i][j] = A[i][j];
                System.out.println(p[i][j] + " " + i + " " + j);
                if (i != 0) {

                    p[i][j] += p[i - 1][j];
                }
                if (j != 0) {

                    p[i][j] += p[i][j - 1];
                }
                if (i != 0 && j != 0) {

                    p[i][j] -= p[i - 1][j - 1];
                }
            }
        }
        System.out.println("Prefix");
        for (int i = 0; i < A.length; i++) {
            for (int j = 0; j < A[0].length; j++) {
                System.out.print(" " + p[i][j]);
            }
            System.out.println();
        }

        return A;
    }

    public static void main(String[] args) {
        int[][] B = { { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 } };
        plusOne(B);
        

    }

    

    
}