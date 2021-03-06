// NAME = (I)tem,(T)ier,(L)ine,(C)ube
// Weapon, Emblem, Secondary, Hat, Top/Overall, Pants, Shoe, Glove, Shoulder/Cape/Belt, Accessory, Heart
// W,      E,      S,         H,   T,           P,     F,    G,     C,                  A,         He
//Stat = Str, Dex, Int, Luk
//Att = Att, MAtt
/* Trash = {
    2%/4% chance of being invincible for 7 seconds when hit
    5%/10% chance to ignore 20%/40% of damage when hit
    30% chance to reflect 50%/70% of damage taken
    Abnormal State Resist: +10
    All skill levels: +2/+3
    Att/Matt per 10 levels per character: +1
    Cooldown time of all skills: -1s/-2s
    <Decent Advanced Blessing> skill available
    <Decent Combat Orders> skill available
    <Decent Hyper Body> skill available
    <Decent Mystic Door> skill available
    <Decent Sharp Eyes> skill available
    <Decent Speed Infusion> skill available (wind booster)
    <Useful haste> skill available (shoe)
    Defense: +12%/9%
    HP recovery item and recovery skill efficiency: +30%
    Invincibility time after being hit: +2/+3 seconds
    Max MP: +12%/9%
    MP consumption of all skills: -15%/-30%
    Resist all attributes: +10% 
    Stat per 10 levels per character: +1 (str, dex, int, luk)
} */

//some totals are off between 2x 10^-7 and 5x 10^-7

//red cube rates
//weapon 
var WL1R = {
    'Stat12'   : .097561, //9.7561%
    'ATT12'    : .048780, //4.8780%
    'Crit12'   : .048780, 
    'DMG12'    : .048780, 
    'AllStat9' : .073171, //7.3171%
    'IED35'    : .048780, //4.8780%
    'IED40'    : .048780, 
    'BDMG30'   : .048780, 
    'BDMG35'   : .048780, 
    'BDMG40'   : .048780,  
    'Trash'    : .097560, //4.8780% x2
};

var WL2R = {
    'Stat9'    : .1 , //10%
    'ATT9'     : .06, //6%
    'Crit9'    : .08, //8%
    'DMG9'     : .06, 
    'AllStat6' : .08, 
    'IED30'    : .06, 
    'BDMG20'   : .06, 
    'BDMG30'   : .04, //4%

    'Stat12'   : .0097561, //0.97561%
    'ATT12'    : .0048780, //0.048780%
    'Crit12'   : .0048780, 
    'DMG12'    : .0048780, 
    'AllStat9' : .0073171, //0.73171%
    'IED35'    : .0048780, //0.48780%
    'IED40'    : .0048780, 
    'BDMG30'   : .0048780, 
    'BDMG35'   : .0048780, 
    'BDMG40'   : .0048780, 
    'Trash'    : .0097560, //0.48780% x2
}

var WL3R = {
    'Stat9'    : .11 , //11%
    'ATT9'     : .066, //6.6%
    'Crit9'    : .088, //8.8%
    'DMG9'     : .066, 
    'AllStat6' : .088, 
    'IED30'    : .066, 
    'BDMG20'   : .066, 
    'BDMG30'   : .044, //4.4%

    'Stat12'   : .000976,   //0.0976%
    'ATT12'    : .00048780, //0.0488%
    'Crit12'   : .00048780, 
    'DMG12'    : .00048780,
    'AllStat9' : .00073171, //0.0732%
    'IED35'    : .00048780, //0.0488%
    'IED40'    : .00048780, 
    'BDMG30'   : .00048780, 
    'BDMG35'   : .00048780, 
    'BDMG40'   : .00048780,
    'Trash'    : .00097560, //0.0488% x2
}

//emblem
var EL1R = {
    'Stat12'   : .114286, //11.4286%
    'ATT12'    : .057143, //5.7143%
    'Crit12'   : .057143, 
    'DMG12'    : .057143, 
    'AllStat9' : .085714, //8.5714%
    'IED35'    : .057143, //5.7143%
    'IED40'    : .057143, 
    'Trash'    : .114286, //5.7143% x2
}

var EL2R = {
    'Stat9'    : .1125, //11.2500%
    'ATT9'     : .0675, // 6.7500%
    'Crit9'    : .0900, // 9.0000%
    'DMG9'     : .0675, 
    'AllStat6' : .0900, 
    'IED30'    : .0675, 

    'Stat12'   : .0114286, //1.1429%
    'ATT12'    : .0057143, //0.5714%
    'Crit12'   : .0057143, 
    'DMG12'    : .0057143, 
    'AllStat9' : .0085714, //0.8571%
    'IED35'    : .0057143, //0.5714%
    'IED40'    : .0057143, 
    'Trash'    : .0114286, //0.5714% x2
}

var EL3R = {
    'Stat9'    : .123750, //12.3750%
    'ATT9'     : .074250, // 7.4250%
    'Crit9'    : .099000, // 9.9000%
    'DMG9'     : .074250, 
    'AllStat6' : .099000, 
    'IED30'    : .074250, 

    'Stat12'   : .00114286, //0.1143%
    'ATT12'    : .00057143, //0.0571%
    'Crit12'   : .00057143, 
    'DMG12'    : .00057143, 
    'AllStat9' : .00085714, //0.0857%
    'IED35'    : .00057143, //0.0571%
    'IED40'    : .00057143, 
    'Trash'    : .00114286, //0.0571% x2
}

//secondary/shield
var SL1R = {
    'Stat12'   : .085106, //8.5106%
    'ATT12'    : .042553, //4.2553%
    'Crit12'   : .042553, 
    'DMG12'    : .042553, 
    'AllStat9' : .063830, //6.3830%
    'IED35'    : .042553, //4.2553%
    'IED40'    : .042553, 
    'BDMG30'   : .042553, 
    'BDMG35'   : .042553, 
    'BDMG40'   : .042553,  
    'Trash'    : .212766, //4.2553% x2 + 6.3830% x2
}

var SL2R = {
    'Stat9'    : .084906, //8.4906%
    'ATT9'     : .050943, //5.0943%
    'Crit9'    : .067925, //6.7925%
    'DMG9'     : .050943, 
    'AllStat6' : .067925, 
    'IED30'    : .050943, 
    'BDMG20'   : .050943, //5.0943%
    'BDMG30'   : .033962, //3.3962%

    'Stat12'   : .0085106, //0.8511%
    'ATT12'    : .0042553, //0.4255%
    'Crit12'   : .0042553, 
    'DMG12'    : .0042553, 
    'AllStat9' : .0063830, //0.6383%
    'IED35'    : .0042553, //0.4255%
    'IED40'    : .0042553, 
    'BDMG30'   : .0042553, 
    'BDMG35'   : .0042553, 
    'BDMG40'   : .0042553, 
    'Trash'    : .1571266, //6.7925% x2 + 0.4255% x2 + 0.6383% x2
}

var SL3R = {
    'Stat9'    : .093396, //9.3396%
    'ATT9'     : .056038, //5.6038%
    'Crit9'    : .074717, //7.4717%
    'DMG9'     : .056038, 
    'AllStat6' : .074717, 
    'IED30'    : .056038, 
    'BDMG20'   : .056038, //5.6038%
    'BDMG30'   : .037358, //3.7358%

    'Stat12'   : .00085106, //0.0851%
    'ATT12'    : .00042553, //0.0426%
    'Crit12'   : .00042553, 
    'DMG12'    : .00042553, 
    'AllStat9' : .00063830, //0.0638%
    'IED35'    : .00042553, //0.4255%
    'IED40'    : .00042553, 
    'BDMG30'   : .00042553, 
    'BDMG35'   : .00042553, 
    'BDMG40'   : .00042553, 
    'Trash'    : .15156166, //7.4717% x2 + 0.0426% x2 + 0.0638% x2
}

//hat
var HL1R = {
    'Stat12'   : .08, //8.0000%
    'HP12'     : .08, 
    'AllStat9' : .06, //6.0000%
    'Trash'    : .54, //8% x2 +6% x5 + 4% x2
}

var HL2R = {
    'Stat9'    : .072581, //7.2581%
    'HP9'      : .087097, //8.7097%
    'AllStat6' : .058065, //5.8065%

    'Stat12'   : .008,    //0.8000%
    'HP12'     : .008, 
    'AllStat9' : .006,    //0.6000%
    'Trash'    : .518519, //8.7097% + 5.8065% *6 + 2.9032% + 0.8000% *2 + 0.6000% *5 + 0.4000% *2
}

var HL3R = {
    'Stat9'    : .079839, //7.9839%
    'HP9'      : .095806, //9.5806%
    'AllStat6' : .063871, //6.3871%

    'Stat12'   : .0008,   //0.08000%
    'HP12'     : .0008, 
    'AllStat9' : .0006,   //0.06000%
    'Trash'    : .516367, //9.5806% + 6.3871% *6 + 3.1935% + 0.0800% *2 + 0.0600% *5 + 0.0400% *2
}

//top/overall
var TL1R = {
    'Stat12'   : .088889, //8.8889%
    'HP12'     : .088889, 
    'AllStat9' : .066667, //6.6667%	
    'Trash'    : .48889,  //8.8889% *2 + 4.4444% + 6.6667% *4
}

var TL2R = {
    'Stat9'    : .068182,  //6.8182%
    'HP9'      : .081818,  //8.1818%
    'AllStat6' : .054545,  //5.4545%

    'Stat12'   : .0088889, //0.8889%
    'HP12'     : .0088889, 
    'AllStat9' : .0066667, //0.6667%
    'Trash'    : .539795,  //8.1818% + 5.4545% *7 + 2.7273% + 0.88889% *2 + 0.66667% *4 + 0.44444%
}

var TL3R = {
    'Stat9'    : .075, //7.5000%
    'HP9'      : .09,  //9.0000%
    'AllStat6' : .06,  //6.0000%

    'Stat12'   : .00088889, //0.0889%
    'HP12'     : .00088889, 
    'AllStat9' : .00066667, //0.0667%
    'Trash'    : .5448889,  //9.0000% + 6.0000% *7 + 3.0000% + .088889% *2 + .066667% * 4 + .044444%
}

//pants
var PL1R = {
    'Stat12'   : .102564, //10.2564%
    'HP12'     : .102564, 
    'AllStat9' : .076923, //7.6923%
    'Trash'    : .410256, //10.2564% *2 + 7.6923% *2 + 5.1282%
}

var PL2R = {
    'Stat9'    : .080357,  //8.0357%
    'HP9'      : .096429,  //9.6429%
    'AllStat6' : .064286,  //6.4286%

    'Stat12'   : .0102564, //1.0256%
    'HP12'     : .0102564, 
    'AllStat9' : .0076923, //0.7692%
    'Trash'    : .4588846, //9.6429% + 6.4286% *5 + 1.02564% *2 + 0.76923% *2 + 0.51282%
}

var PL3R = {
    'Stat9'    : .088393,   //8.8393%
    'HP9'      : .106071,   //10.6071%
    'AllStat6' : .070714,   //7.0714%

    'Stat12'   : .00102564, //0.1026%
    'HP12'     : .00102564, 
    'AllStat9' : .00076923, //0.0769%
    'Trash'    : .46374356, //10.6071% + 7.0714%*5 + 0.102564% *2 + 0.076923% *2 + 0.051282%
}

//feet/shoe
var FL1R = {
    'Stat12'   : .10,  //10.0%
    'HP12'     : .10, 
    'AllStat9' : .075, //7.6923%
    'Trash'    : .425, //10% *2 + 7.5% *3
}

var FL2R = {
    'Stat9'    : .080357,  //8.0357%
    'HP9'      : .096429,  //9.6429%
    'AllStat6' : .064286,  //6.4286%

    'Stat12'   : .010,     //1.0%
    'HP12'     : .010, 
    'AllStat9' : .0075,    //.75%
    'Trash'    : .460359,  //9.6429% + 6.4286% *5 + 1% *2 + .75% *3
}

var FL3R = {
    'Stat9'    : .088393,  //8.8393%
    'HP9'      : .106071,  //10.6071%
    'AllStat6' : .070714,  //7.0714%

    'Stat12'   : .0010,    //.10%
    'HP12'     : .0010, 
    'AllStat9' : .00075,   //.075%
    'Trash'    : .463891,  //10.6071% + 7.0714% *5 + .1% *2 + .075% *3
}

//glove
var GL1R = {
    'Stat12'   : .090909, //9.0909%	
    'HP12'     : .090909, 
    'Cdmg8'    : .090909, //4.5455% *2
    'AllStat9' : .068182, //6.8182%
    'Trash'    : .386364, //9.0909% *2 + 6.8182% *3
}

var GL2R = {
    'Stat9'    : .075, //7.5%
    'HP9'      : .09,  //9.0%
    'AllStat6' : .06,  //6.0%

    'Stat12'   : .0090909, //0.90909%	
    'HP12'     : .0090909, 
    'Cdmg8'    : .0090909, //0.45455% *2
    'AllStat9' : .0068182, //0.68182%
    'Trash'    : .4886364, //9% + 6% *5 + 1.5% *4 + 0.90909% *2 + 0.68182%	*3
}

var GL3R = {
    'Stat9'    : .0825, //8.2500%
    'HP9'      : .099,  //9.9000%
    'AllStat6' : .066,  //6.6000%

    'Stat12'   : .00090909, //0.090909%	
    'HP12'     : .00090909, 
    'Cdmg8'    : .00090909, //0.045455% *2
    'AllStat9' : .00068182, //0.068182%
    'Trash'    : .49886364, //9.9% + 6.6% *5 + 1.65% *4 + .090909% *2 + .068182% *3
}

//shoulder/cape/belt
var CL1R = {
    'Stat12'   : .108108, //10.8108%
    'HP12'     : .108108, 
    'AllStat9' : .081081, //8.1081%
    'Trash'    : .378378, //10.8108% *2 + 8.1081% *2
}

var CL2R = {
    'Stat9'    : .086538,  //8.6538%
    'HP9'      : .103846,  //10.3846%
    'AllStat6' : .069231,  //6.9231%

    'Stat12'   : .0108108, //1.08108%
    'HP12'     : .0108108, 
    'AllStat9' : .0081081, //0.81081%
    'Trash'    : .4186078, //10.3846% + 6.9231% *4 + 1.08108% *2 + 0.81081% *2
}

var CL3R = {
    'Stat9'    : .095192,   //9.5192%
    'HP9'      : .114231,   //11.4231%
    'AllStat6' : .076154,   //7.6154%

    'Stat12'   : .00108108, //0.108108%
    'HP12'     : .00108108, 
    'AllStat9' : .00081081, //0.081081%
    'Trash'    : .42263078, //11.4231% + 7.6154% *4 + .108108% *2 + .081081% *2
}

//Accessory (face, eye, earring, ring, pendant)
var AL1R = {
    'Stat12'   : .093023, //9.3023%
    'HP12'     : .093023, 
    'AllStat9' : .069767, //6.9767%
    'MesoDrop' : .069767,
    'Trash'    : .32558,  //9.3023% *2 + 6.9767% *2
}

var AL2R = {
    'Stat9'    : .102273,  //10.2273%
    'HP9'      : .122727,  //12.2727%
    'AllStat6' : .081818,  //8.1818%

    'Stat12'   : .0093023, //0.93023%
    'HP12'     : .0093023, 
    'AllStat9' : .0069767, //0.69767%
    'MesoDrop' : .0069767,
    'Trash'    : .318921,  //12.2727% + 8.1818% *2 + .93023% *2 + .69767% *2
}

var AL3R = {
    'Stat9'    : .1125, //11.2500%
    'HP9'      : .135,  //13.5000%
    'AllStat6' : .09,   //9.0000%

    'Stat12'   : .00093023, //0.093023%
    'HP12'     : .00093023, 
    'AllStat9' : .00069767, //0.069767%
    'MesoDrop' : .00069767,
    'Trash'    : .3182558,  //13.5% + 9% *2 + .093023% *2 + .069767% *2
}

//heart
var HeL1R = {
    'Stat12'   : .129032, //12.9032%
    'HP12'     : .129032, 
    'AllStat9' : .096774, //9.6774%
    'Trash'    : .258064, //12.9032% x2
}

var HeL2R = {
    'Stat9'    : .102273,  //10.2273%
    'HP9'      : .122727,  //12.2727%
    'AllStat6' : .081818,  //8.1818%

    'Stat12'   : .0129032, //1.29032%
    'HP12'     : .0129032, 
    'AllStat9' : .0096774, //0.96774%
    'Trash'    : .3121694, //12.2727% + 8.1818% *2 + 1.29032% *2
}

var HeL3R = {
    'Stat9'    : .1125,  //11.25%
    'HP9'      : .1350,  //13.5%
    'AllStat6' : .09,    //9%

    'Stat12'   : .00129032, //0.129032%
    'HP12'     : .00129032, 
    'AllStat9' : .00096774, //0.096774%
    'Trash'    : .31758064, //13.5% + 9% *2 + .129032% *2
}

//black cube rates
//weapon L2 = L1/5 L3 = L2/4
var WL1B = {
    'Stat12'   : .097561, //9.7561%
    'ATT12'    : .048780, //4.8780%
    'Crit12'   : .048780, 
    'DMG12'    : .048780, 
    'AllStat9' : .073171, //7.3171%
    'IED35'    : .048780, //4.8780%
    'IED40'    : .048780, 
    'BDMG30'   : .048780, 
    'BDMG35'   : .048780, 
    'BDMG40'   : .048780,  
    'Trash'    : .097560, //4.8780% x2
};

var WL2B = {
    'Stat9'    : .088889, //8.8889%
    'ATT9'     : .053333, //5.3333%
    'Crit9'    : .071111, //7.1111%
    'DMG9'     : .053333, 
    'AllStat6' : .071111, 
    'IED30'    : .053333, 
    'BDMG20'   : .053333, 
    'BDMG30'   : .035556, //3.5556%

    'Stat12'   : .0195122, //1.9512%
    'ATT12'    : .009756, //0.9756%
    'Crit12'   : .009756, 
    'DMG12'    : .009756, 
    'AllStat9' : .0146342, //1.4634%
    'IED35'    : .009756,  //0.9756%
    'IED40'    : .009756, 
    'BDMG30'   : .009756, 
    'BDMG35'   : .009756, 
    'BDMG40'   : .009756, 
    'Trash'    : .019512, //0.9756% x2
}

var WL3B = {
    'Stat9'    : .105556, //10.5556%
    'ATT9'     : .063333, //6.3333%
    'Crit9'    : .084444, //8.4444%
    'DMG9'     : .063333, 
    'AllStat6' : .084444, 
    'IED30'    : .063333, 
    'BDMG20'   : .063333, 
    'BDMG30'   : .042222, //4.2222%

    'Stat12'   : .00487805, //0.4878%
    'ATT12'    : .002439, //0.2439%
    'Crit12'   : .002439, 
    'DMG12'    : .002439, 
    'AllStat9' : .00365855, //0.3659%
    'IED35'    : .002439,  //0.2439%
    'IED40'    : .002439, 
    'BDMG30'   : .002439, 
    'BDMG35'   : .002439, 
    'BDMG40'   : .002439, 
    'Trash'    : .00487805, //0.2439% x2
}

//emblem
var EL1B = {
    'Stat12'   : .114286, //11.4286%
    'ATT12'    : .057143, //5.7143%
    'Crit12'   : .057143, 
    'DMG12'    : .057143, 
    'AllStat9' : .085714, //8.5714%
    'IED35'    : .057143, //5.7143%
    'IED40'    : .057143, 
    'Trash'    : .114286, //5.7143% x2
}

var EL2B = {
    'Stat9'    : .10, //10.0000%
    'ATT9'     : .06, //6.0000%
    'Crit9'    : .08, //8.0000%
    'DMG9'     : .06, 
    'AllStat6' : .08, 
    'IED30'    : .06, 

    'Stat12'   : .0228572, //2.2857%
    'ATT12'    : .0114286, //1.1429%
    'Crit12'   : .0114286, 
    'DMG12'    : .0114286, 
    'AllStat9' : .0171428, //1.7143%
    'IED35'    : .0114286, //1.1429%
    'IED40'    : .0114286, 
    'Trash'    : .0228572, //1.1429% x2
}

var EL3B = {
    'Stat9'    : .118750, //11.8750%
    'ATT9'     : .07125,  //7.1250%
    'Crit9'    : .095,    //9.5000%
    'DMG9'     : .07125, 
    'AllStat6' : .095, 
    'IED30'    : .07125, 

    'Stat12'   : .0057143,  //0.5714%
    'ATT12'    : .00285715, //0.2857%
    'Crit12'   : .00285715, 
    'DMG12'    : .00285715, 
    'AllStat9' : .0042857,  //0.4286%
    'IED35'    : .00285715, //0.2857%
    'IED40'    : .00285715, 
    'Trash'    : .0057143,  //0.2857% x2
}

//secondary/shield
var SL1B = {
    'Stat12'   : .085106, //8.5106%
    'ATT12'    : .042553, //4.2553%
    'Crit12'   : .042553, 
    'DMG12'    : .042553, 
    'AllStat9' : .063830, //6.3830%
    'IED35'    : .042553, //4.2553%
    'IED40'    : .042553, 
    'BDMG30'   : .042553, 
    'BDMG35'   : .042553, 
    'BDMG40'   : .042553,  
    'Trash'    : .212766, //4.2553% x2 + 6.3830% x2
}

var SL2B = {
    'Stat9'    : .075472, //7.5472%
    'ATT9'     : .045283, //4.5283%
    'Crit9'    : .060377, //6.0377%
    'DMG9'     : .045283, 
    'AllStat6' : .060377, 
    'IED30'    : .045283, 
    'BDMG20'   : .045283, //4.5283%
    'BDMG30'   : .030189, //3.0189%

    'Stat12'   : .0170212, //1.7021%
    'ATT12'    : .0085106, //0.8511%
    'Crit12'   : .0085106, 
    'DMG12'    : .0085106, 
    'AllStat9' : .012766,  //1.2766%
    'IED35'    : .0085106, //0.8511%
    'IED40'    : .0085106, 
    'BDMG30'   : .0085106, 
    'BDMG35'   : .0085106, 
    'BDMG40'   : .0085106,  
    'Trash'    : .1633072, //6.0377% *2 + 0.85106% *2 + 1.2766% *2
}

var SL3B = {
    'Stat9'    : .089623, //8.9623%
    'ATT9'     : .053774, //5.3774%
    'Crit9'    : .071698, //7.1698%
    'DMG9'     : .053774, 
    'AllStat6' : .071698, 
    'IED30'    : .053774, 
    'BDMG20'   : .053774, //5.3774%
    'BDMG30'   : .035849, //3.5849%
    
    'Stat12'   : .0042553,  //0.4255%
    'ATT12'    : .00212765, //0.2128%
    'Crit12'   : .00212765, 
    'DMG12'    : .00212765, 
    'AllStat9' : .0031915,  //0.3191%
    'IED35'    : .00212765, //0.2128%
    'IED40'    : .00212765, 
    'BDMG30'   : .00212765, 
    'BDMG35'   : .00212765, 
    'BDMG40'   : .00212765,  
    'Trash'    : .1540343,  //7.1698% *2 + 0.212765% *2 + 0.31915% *2
}

//hat
var HL1B = {
    'Stat12'   : .08, //8.0000%
    'HP12'     : .08, 
    'AllStat9' : .06, //6.0000%
    'Trash'    : .54, //8% x2 +6% x5 + 4% x2
}

var HL2B = {
    'Stat9'    : .064516, //6.4516%
    'HP9'      : .077419, //7.7419%
    'AllStat6' : .051613, //5.1613%	

    'Stat12'   : .016,    //1.6000%
    'HP12'     : .016, 
    'AllStat9' : .012,    //1.2000%
    'Trash'    : .520903, //7.7419% + 5.1613% *6 + 2.5806% + 1.6000% * 2 + 1.2000% *5 + 0.8000% *2
}

var HL3B = {
    'Stat9'    : .076613, //7.6613%
    'HP9'      : .091935, //9.1935%
    'AllStat6' : .061290, //6.1290%

    'Stat12'   : .004,    //0.4000%
    'HP12'     : .004, 
    'AllStat9' : .003,    //0.3000%
    'Trash'    : .51732,  //9.1935% + 6.1290% *6 + 3.0645% + 0.4000% *2 + 0.3000% *5 + 0.2000% *2
}

//top/overall
var TL1B = {
    'Stat12'   : .088889, //8.8889%
    'HP12'     : .088889, 
    'AllStat9' : .066667, //6.6667%	
    'Trash'    : .48889,  //8.8889% *2 + 4.4444% + 6.6667% *4
}

var TL2B = {
    'Stat9'    : .060606,  //6.0606%
    'HP9'      : .072727,  //7.2727%
    'AllStat6' : .048485,  //4.8485%

    'Stat12'   : .0177778, //1.7778%
    'HP12'     : .0177778, 
    'AllStat9' : .0133334, //1.3333%
    'Trash'    : .534142,  //7.2727% + 4.8485% *7 + 2.4242% + 1.77778% *2 + 1.33334% *4 + 0.88888%
}

var TL3B = {
    'Stat9'    : .071970, //7.1970%
    'HP9'      : .086364, //8.6364%
    'AllStat6' : .057576, //5.7576%

    'Stat12'   : .00444445, //0.4444%
    'HP12'     : .00444445, 
    'AllStat9' : .00333335, //0.3333%
    'Trash'    : .5426285,  //8.6364% + 5.7576% *7 + 2.8788% + 0.444445% *2 + 0.333335% * 4 + 0.22222%
}

//pants
var PL1B = {
    'Stat12'   : .102564, //10.2564%
    'HP12'     : .102564, 
    'AllStat9' : .076923, //7.6923%
    'Trash'    : .410256, //10.2564% *2 + 7.6923% *2 + 5.1282%
}

var PL2B = {
    'Stat9'    : .071429,  //7.1429%
    'HP9'      : .085714,  //8.5714%
    'AllStat6' : .057143,  //5.7143%

    'Stat12'   : .0205128, //2.0513%
    'HP12'     : .0205128, 
    'AllStat9' : .0153846, //1.5385%
    'Trash'    : .4534802, //8.5714% + 5.7143% *5 + 2.05128% *2 + 1.53846% *2 + 1.02564%
}

var PL3B = {
    'Stat9'    : .084821,   //8.4821%
    'HP9'      : .101786,   //10.1786%
    'AllStat6' : .067857,   //6.7857%

    'Stat12'   : .0051282,  //0.5128%
    'HP12'     : .0051282, 
    'AllStat9' : .00384615, //0.3846%
    'Trash'    : .4615838, //10.1786% + 6.7857% *5 + 0.51282% *2 + 0.384615% *2 + 0.25641%
}

//feet/shoe
var FL1B = {
    'Stat12'   : .10,  //10.0%
    'HP12'     : .10, 
    'AllStat9' : .075, //7.5%
    'Trash'    : .425, //10% *2 + 7.5% *3
}

var FL2B = {
    'Stat9'    : .071429,  //7.1429%
    'HP9'      : .085714,  //8.5714%
    'AllStat6' : .057143,  //5.7143%

    'Stat12'   : .02,  //2%
    'HP12'     : .02, 
    'AllStat9' : .015, //1.5%
    'Trash'    : .4615838,  //8.5714% + 5.7143% *5 + 2% *2 + 1.5% *3
}

var FL3B = {
    'Stat9'    : .084821,  //8.4821%
    'HP9'      : .101786,  //10.1786%
    'AllStat6' : .067857,  //6.7857%

    'Stat12'   : .005,     //.5%
    'HP12'     : .005, 
    'AllStat9' : .00375,   //.3750%
    'Trash'    : .462321,  //10.1786% + 6.7857% *5 + .5% *2 + .3750% *3
}

//glove
var GL1B = {
    'Stat12'   : .090909, //9.0909%	
    'HP12'     : .090909, 
    'Cdmg8'    : .090909, //4.5455% *2
    'AllStat9' : .068182, //6.8182%
    'Trash'    : .386364, //9.0909% *2 + 6.8182% *3
}

var GL2B = {
    'Stat9'    : .066667,  //6.6667%
    'HP9'      : .08,      //8.0000%
    'AllStat6' : .053333,  //5.3333%

    'Stat12'   : .0181818, //1.8182%	
    'HP12'     : .0181818, 
    'Cdmg8'    : .0181818, //0.9091% *2
    'AllStat9' : .0136364, //1.3636%
    'Trash'    : .4772698, //8.0000% + 5.3333% *5 + 1.3333% *4 + 1.81818% *2 + 1.36364% *3
}

var GL3B = {
    'Stat9'    : .079167,   //7.9167%
    'HP9'      : .095,      //9.5000%
    'AllStat6' : .063333,   //6.3333%

    'Stat12'   : .00454545, //0.4545%	
    'HP12'     : .00454545, 
    'Cdmg8'    : .00454545, //0.2273% *2
    'AllStat9' : .0034091,  //0.3409%
    'Trash'    : .4943152,  //9.5000% + 6.3333% *5 + 1.5833% *4 + .454545% *2 + .34091% *3
}

//shoulder/cape/belt
var CL1B = {
    'Stat12'   : .108108, //10.8108%
    'HP12'     : .108108, 
    'AllStat9' : .081081, //8.1081%
    'Trash'    : .378378, //10.8108% *2 + 8.1081% *2
}

var CL2B = {
    'Stat9'    : .076923,  //7.6923%
    'HP9'      : .092308,  //9.2308%
    'AllStat6' : .061538,  //6.1538%

    'Stat12'   : .0216216, //2.1622%
    'HP12'     : .0216216, 
    'AllStat9' : .0162162, //1.6216%
    'Trash'    : .4141356, //9.2308% + 6.1538% *4 + 2.16216% *2 + 1.62162% *2
}

var CL3B = {
    'Stat9'    : .091346,   //9.1346%
    'HP9'      : .109615,   //10.9615%
    'AllStat6' : .073077,   //7.3077%

    'Stat12'   : .0054054, //0.5405%
    'HP12'     : .0054054, 
    'AllStat9' : .00405405, //0.4054%
    'Trash'    : .4208419, //10.9615% + 7.3077% *4 + .54054% *2 + .405405% *2
}

//Accessory (face, eye, earring, ring, pendant)
var AL1B = {
    'Stat12'   : .093023, //9.3023%
    'HP12'     : .093023, 
    'AllStat9' : .069767, //6.9767%
    'MesoDrop' : .069767,
    'Trash'    : .32558,  //9.3023% *2 + 6.9767% *2
}

var AL2B = {
    'Stat9'    : .090909,  //9.0909%
    'HP9'      : .109091,  //10.9091%
    'AllStat6' : .072727,  //7.2727%

    'Stat12'   : .0186046, //1.8605%
    'HP12'     : .0186046, 
    'AllStat9' : .0139534, //1.3953%
    'MesoDrop' : .0139534,
    'Trash'    : .319661,  //10.9091% + 7.2727% *2 + 1.86046% *2 + 1.39534% *2
}

var AL3B = {
    'Stat9'    : .107955, //10.7955%
    'HP9'      : .129545,  //12.9545%
    'AllStat6' : .086364,   //8.6364%

    'Stat12'   : .00465115, //0.4651%
    'HP12'     : .00465115, 
    'AllStat9' : .00348865, //0.3488%
    'MesoDrop' : .00348865,
    'Trash'    : .3185526,  //12.9545% + 8.6364% *2 + .465115% *2 + .348865% *2
}

//heart
var HeL1B = {
    'Stat12'   : .129032, //12.9032%
    'HP12'     : .129032, 
    'AllStat9' : .096774, //9.6774%
    'Trash'    : .258064, //12.9032% x2
}

var HeL2B = {
    'Stat9'    : .090909,  //9.0909%
    'HP9'      : .109091, //10.9091%
    'AllStat6' : .072727, //7.2727%

    'Stat12'   : .0258064, //2.5806%
    'HP12'     : .0258064, 
    'AllStat9' : .0193548, //1.9355%
    'Trash'    : .3061578, //10.9091% + 7.2727% *2 + 2.58064% *2
}

var HeL3B = {
    'Stat9'    : .107955,  //10.7955%
    'HP9'      : .129545, //12.9545%
    'AllStat6' : .086364, //8.6364%

    'Stat12'   : .0064516, //0.6452%
    'HP12'     : .0064516, 
    'AllStat9' : .0048387, //0.4839%
    'Trash'    : .3151762, //12.9545% + 8.6364% *2 + .64516% *2
}

//Tier rates
var Rtier = {
    'E' : .06,  //6.0%
    'U' : .018, //1.8%
    'L' : .003, //0.3% 
}

var Btier = {
    'E' : .15,  //15.0%
    'U' : .035, //3.5%
    'L' : .01,  //1.0% 
}