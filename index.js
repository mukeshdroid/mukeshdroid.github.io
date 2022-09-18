


function kettleweight_light(gender, age , lifestyle , weight) {
    t1 = (16 - gender * 0.2 * 16)
    t2 = t1 - t1 * 0.25 * Math.abs(3 - age)
    t3 = t2 + t2 * (lifestyle - 1)  * 0.25
    t4 = t3 - t3 * (weight - 1) * 0.25
    if (t4 < 5) {t4 = 5}
    return t4  
  }

  function kettleweight_medium(gender, age , lifestyle , weight) {
    t1 = (20 - gender * 0.2 * 16)
    t2 = t1 - t1 * 0.25 * Math.abs(3 - age)
    t3 = t2 + t2 * (lifestyle - 1)  * 0.25
    t4 = t3 - t3 * (weight - 1) * 0.25
    if (t4 < 6) {t4 = 6}
    return t4  
  }

  function kettleweight_heavy(gender, age , lifestyle , weight) {
    t1 = (32 - gender * 0.2 * 16)
    t2 = t1 - t1 * 0.25 * Math.abs(3 - age)
    t3 = t2 + t2 * (lifestyle - 1)  * 0.25
    t4 = t3 - t3 * (weight - 1) * 0.25
    if (t4 < 7) {t4 = 7}
    return t4  

  }
    function get_result(){
        var genderf = document.getElementById("gender");
        var gender = genderf.value;

        var lifestylef = document.getElementById("lifestyle");
        var lifestyle = lifestylef.value;

        var agef = document.getElementById("lifestyle");
        var age = agef.value;


        var weightf = document.getElementById("weight");
        var weight = weightf.value;
        r = "light weight = " + kettleweight_light(gender, age , lifestyle , weight) + "Kg \n" + "Medium weight = " + kettleweight_medium(gender, age , lifestyle , weight) + "Kg \n" + "Heavy weight = " + kettleweight_heavy(gender, age , lifestyle , weight) + "Kg \n";
        result_sec = document.getElementById("results").innerHTML = r;


    }
  