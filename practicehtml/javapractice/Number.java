public class Number {
	public static void main(String[] args) {
		PrintNumbers(1);
	}
	public static void PrintNumbers(int i) {
		if (i <= 10) {
			System.out.println(i);
			PrintNumbers(i + 1);
		}
	}
}
