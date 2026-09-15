document.querySelector("#inputs #price").addEventListener('keyup',getInatallment)
document.querySelector("#inputs #Down Payment").addEventListener('keyup',getInatallment)
document.querySelector("#inputs #Installment Duration").addEventListener('change',getInatallment)

function getInatallment(){
    var price=document.querySelector('#price').value
    var downPayment=document.querySelector('#DownPayment').value
    var installmentDuration=document.querySelector('#InstallmentDuration').value
    

    var remainingValue = parseFloat(price) - parseFloat(payment) 
    var interestRate=0
    if(installmentDuration==1){
        interestRate=0.1
    }
    else if(installmentDuration==2){
        interestRate=0.18
    }
    else if(installmentDuration==3){
        interestRate=0.29
    }
    else if(installmentDuration==4){
        interestRate=0.38
    }
    else if(installmentDuration==5){
        interestRate=0.49
    }
    else if(installmentDuration==6){
        interestRate=0.64
    }
    else if(installmentDuration==7){
        interestRate=0.79
    }
    var interestValue = parseFloat(remainingValue) * parseFloat(interestRate)
    var totalInstallements = parseFloat(remainingValue) + parseFloat(interestValue)

    var months = installmentDuration * 12
    var monthlyInstallment  = totalInstallements / months

    document.querySelector('#inputs #interestValue').innerText="Interest Value="+interestValue.toFixed(2) 
    document.querySelector('#monthlyInstallment').innerText="Monthly Installment="+interestValue.toFixed(2) 
    

}




/* 
/* User Inputs
Car Price = 1.000.000
Down Payment = 350.000
Years = 1

/* Calculations
Remaining Value = Car Price - Down Payment 
1 Year =>  Interest Rate = 0.1
2 Years =>  Interest Rate = 0.18
3 Years =>  Interest Rate = 0.29
4 Years =>  Interest Rate = 0.38
5 Years =>  Interest Rate = 0.49
7 Years =>  Interest Rate = 0.79
Interest Value = Remaining Value * Interest Rate
Total Installements = Remaining Value + Interest Value
Months = Years * 12
Monthly Installment  = Total Installements / Months

/* Output
Monthly Installment

*/