document.querySelector("#inputs #price").addEventListener('keyup',getInatallment)
document.querySelector("#inputs #DownPayment").addEventListener('keyup',getInatallment)
document.querySelector("#inputs #InstallmentDuration").addEventListener('change',getInatallment)

function getInatallment(){
    var price=document.querySelector('#price').value
    var downPayment=document.querySelector('#DownPayment').value
    var installmentDuration=document.querySelector('#InstallmentDuration').value
    

    var remainingValue = parseFloat(price) - parseFloat(downPayment) 
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

    document.querySelector('#interestValue').innerText="Interest Value="+interestValue.toFixed(2) 
    document.querySelector('#monthlyInstallment').innerText="Monthly Installment="+monthlyInstallment.toFixed(2) 
    

}


