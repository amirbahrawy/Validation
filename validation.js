var Name= document.getElementById('names'),
    Phone=document.getElementById('phone'),
    Pass=document.getElementById('pass'),
    PassConfirm=document.getElementById('confirm_pass'),
    Err0r=document.getElementById('error'),
    Check=document.getElementById('check'),
    Submit=document.getElementById('submit');


function check_name(x)
    {
        if(x.value.length <3)
        return false ;
        else
        return true;
    }
    
    Name.addEventListener('keyup',function(){
        if(check_name(Name))
        Err0r.innerHTML='';
        else
        {
            Err0r.innerHTML='invalid name' ;
            Err0r.style.color='red';
        }
    });

    function check_pass(x)
    {
        if(x.value.length <4)
        return false;
        else
        return true;
    }

    Pass.addEventListener('keyup',function()
    {
        if(check_pass(Pass))
        Err0r.innerHTML='';
        else
        {Err0r.innerHTML='invalid password' ;
        Err0r.style.color='red';}
    });

function confirm_pass(x,y)
{
    if(x.value==y.value)
    return true;
    else
    return false;
}

PassConfirm.addEventListener('keyup',function()
{
    if(confirm_pass(Pass,PassConfirm))
    Err0r.innerHTML='';
    else
   { Err0r.innerHTML='unmatched password' ;
    Err0r.style.color='red';}

});

function show_Pass()
{
    if(Pass.type=='password')
    {
        Pass.type= 'text';
        PassConfirm.type='text';
    }
    else if (Pass.type=='text')
    {
        Pass.type='password';
        PassConfirm.type='password';
    }
}


/*button enable*/
window.addEventListener('keyup',function()
{
    if( Err0r.innerHTML.length<2 && Name.value.length>1 && Phone.value.length>1 )
    Submit.disabled=false;
else 
   { Submit.disabled=true;}


});