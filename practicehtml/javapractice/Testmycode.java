public class Testmycode {
    public static void main(String[] args) {
        String str = "hello world";
        int count = 0;
        char ch = 'o';
        // Iterate through the string in reverse order
        for (int i = str.length() - 1; i >= 0; i--) {
            if (str.charAt(i) == 'o') {
                count++; // Increment count when 'o' is found
            }
        }

        // Output the result
        System.out.println("The character 'o' appears " + count + " times.");
    }
}
