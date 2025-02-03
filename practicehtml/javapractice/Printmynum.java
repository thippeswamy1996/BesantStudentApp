public class Printmynum {
    public static void main(String[] args) {
        Printnumbers(1);

    }

    public static void Printnumbers(int i){
        if(i<=10){
            System.out.println(i);
            Printnumbers(i+1);
           
        }
      

    }
    
}
