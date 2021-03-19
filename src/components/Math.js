// NAME = (I)tem,(T)ier,(L)ine,(C)ube
// Weapon, Emblem, Secondary, Hat, Top/Overall, Pants, Shoe, Shoulder/Cape, Glove, Belt, Accesory , Heart
// W, E, S, H, T, P
//Stat = Str, Dex, Int, Luk
//Att = Att, MAtt
//Trash = {}

//some totals are off between 2x 10^-7 and 5x 10^-7

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

    'Stat12'   : .008,    //0.8000%
    'HP12'     : .008, 
    'AllStat9' : .006,    //0.6000%
    'Trash'    : .516367, //9.5806% + 6.3871% *6 + 3.1935% + 0.0800% *2 + 0.0600% *5 + 0.0400% *2
}

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