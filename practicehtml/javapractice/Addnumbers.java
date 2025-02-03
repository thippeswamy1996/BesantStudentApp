public class Addnumbers {
    public static void main(String[] args) {
        // Start the recursion with the first number (1) and an initial sum of 0
        int summation = printnum(1, 0);
        // Print the result of the sum
        System.out.println("Summation: " + summation);
    }

    public static int printnum(int i, int sum) {
        // Base case: if i exceeds 10, return the accumulated sum
        if (i > 10) {
            return sum;
        } else {
            // Print the current number and accumulate the sum
            System.out.println(i);
            // Recursively call with i+1 and updated sum
            return printnum(i + 1, sum + i);
        }
    }
}
