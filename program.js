



var employeePaySlip = {

     pf : 0,
     hra : 0,
     Total : 0,
     AfterTax : 0,
     fetchUserData (){

          this.ename = document.querySelector("#empname").value;
          this.eAge = document.querySelector(".eage").value;
          this.Gen = document.querySelector("input[name=gender]:checked").value;
          this.dep = document.querySelector(".Department").value;
          
          this.BasicSalary = document.querySelector(".basicSal").value;
          this.BasicSalary = parseInt (this.BasicSalary);

          console.log(this.ename);
          console.log(this.eAge);
          console.log(this.Gen);
          console.log(this.dep);
          console.log(this.BasicSalary);
          console.log(typeof(this.BasicSalary));

          this.pf_Hra_Totalsal ();
     },

     pf_Hra_Totalsal (){

               this.pf = (this.BasicSalary * 10) / 100

               this.hra = (this.BasicSalary *15) / 100

               this.Total = this.BasicSalary + this.pf + this.hra;

               console.log("pf "+this.pf);
               console.log("hra "+this.hra);
               console.log("tatal  => "+this.Total);

               this.taxCalculation ()
     },

     taxCalculation (){

          if( this.Gen == "male"){

               if(this.Total > 200000){

                         this.AfterTax =  this.Total - (this.Total * 10) /100

               }else if ( this.Total > 100000){

                    this.AfterTax =  this.Total - (this.Total * 5) /100

               } else if (this.Total < 100000){

                    this.AfterTax = this.Total;
               } else {
                    this.AfterTax = "Salary should be more then 0"
               }




               }else if ( this.Gen == "female"){

              
                    if(this.Total > 200000){

                         this.AfterTax =  this.Total - (this.Total * 5) /100

               } else if (this.Total < 200000){

                    this.AfterTax = this.Total;
               } else {
                    this.AfterTax = "Salary should be more then 0";
               }
    
    
          }

               console.log( " tax after salary   => "+ this.AfterTax);
     
               this.showDataTo_User ();
},


       showDataTo_User (){


          document.querySelector(".spancolor").style.display = "block";

          document.querySelector(".empname").innerText = this.ename;
          document.querySelector(".empage").innerText = this.eAge ;
          document.querySelector(".empgender").innerText = this.Gen ;
          document.querySelector(".empdepartment").innerText = this.dep ;
          document.querySelector(".basicsalary").innerText = this.BasicSalary ;
          document.querySelector(".emppf").innerText = this.pf ;
          document.querySelector(".emphra").innerText = this.hra ;
          document.querySelector(".beforetax").innerText = this.Total ;
          document.querySelector(".aftertax").innerText = this.AfterTax;

         


       }

}