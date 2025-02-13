public class Practice1{
  public static void main(String [] args){
   
   String str ="Hi Thippesh";
   String Reversedstr="";
   
   for(int i=str.length()-1; i >=0 ;i--){
   Reversedstr +=str.charAt(i);
  
   }
    System.out.println("The reversed string is "+Reversedstr);
  }
}