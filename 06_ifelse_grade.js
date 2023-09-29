var voteEligible = function(age){
    var result = + age
    if (age <= 0 || age > 130 || age == null || isNaN(result)) {
        console.log(`In valid data : ${age}`);
    }
    else{
        if (age < 18) {
            console.log(`not eligible for vote: ${age}`);
        }
        else{
            console.log(`eligible for vote: ${age}`);
        }
    }
}

voteEligible("ok");
voteEligible(0);
voteEligible(130);
voteEligible(null);
voteEligible(undefined);
voteEligible(NaN);
voteEligible(18);
voteEligible(60);
voteEligible(145);