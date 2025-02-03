public class Run {
    public static void main(String[] args) {
        add();
        checkcharlength();
    }

    public static void add() {
        int a = 14;
        int b = 14;
        int c = a + b;
        System.out.println("Sum of the a and b = " + c);
    }

    public static void checkcharlength() {
        String str = "hello";
        int count = 0;
        for (int i = str.length() - 1; i >= 0; i--) {
            count++;  // Simply increment count for each character in the string
        }
        System.out.println("Length of the string is: " + count);  // Output the length
    }
}
