const et_months = ["መስከረም", "ጥቅምት", "ኅዳር", "ታኅሣሥ", "ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜን"];
const et_days = ["ሰኞ", "ማክሰኞ", "ረቡዕ", "ሓሙስ", "ዓርብ", "ቅዳሜ", "እሑድ"];
const et_name_Evangelist = ["ወንጌላዊ ዮሐንስ", "ወንጌላዊ ማቴዎስ", "ወንጌላዊ ማርቆስ", "ወንጌላዊ ሉቃስ"];
const tinte_abektie = 11;
const tinte_metqi = 19;
const tewsak_days = {"ቅዳሜ":8, "እሑድ":7, "ሰኞ":6, "ማክሰኞ":5, "ረቡዕ":4, "ሓሙስ":3, "ዓርብ":2};
const num_months = {"መስከረም":1, "ጥቅምት":2, "ኅዳር":3, "ታኅሣሥ":4, "ጥር":5, "የካቲት":6, "መጋቢት":7, "ሚያዝያ":8, "ግንቦት":9, "ሰኔ":10, "ሐምሌ":11, "ነሐሴ":12, "ጳጉሜን":13};
const tewsak = [[0, 0, "ጾመ ነነዌ"],
                [0, 14, "ዐቢይ ጾም"], 
                [1, 11, "ደብረ ዘይት"], 
                [2, 2, "ሆሳዕና"], 
                [2, 7, "ስቅለት"], 
                [2, 9, "ትንሣኤ"], 
                [3, 3, "ርክበ ካህናት"], 
                [3, 18, "ዕርገት"], 
                [3, 28, "በዓለ ኀምሣ"], 
                [3, 29, "ጾመ ሐዋሪያት"], 
                [4, 1, "ጾመ ድኅነት"]];
"use strict";
export function solve_bahrehasab(year) {
    const date = new Date(year); 

    const n_year = date.getFullYear();
    let w_age = 5500 + n_year;
    let nw = w_age % 4;
    //console.log(et_name_Evangelist[nw]);
    let f_day = ((w_age - (w_age % 4)) / 4 + w_age) % 7;
    //console.log(et_days[f_day]);
    let medeb = w_age % tinte_metqi;
    let wenber = medeb - 1;
    let abektie = (wenber * tinte_abektie) % 30;
    let metqi = 30 - abektie;
    let bahle_metqi = (metqi > 14) ? et_months[0] + " " + metqi : et_months[1] + " " + metqi;
    // this is m_day denoting metqi day and this is to find on which day its laying
    let m_day = (metqi > 14) ? (f_day + metqi - 1) % 7 : (f_day + 30 + metqi - 1) % 7; 
    //console.log(bahle_metqi);
    let m_hamer = tewsak_days[et_days[m_day]] + metqi;
    let tsome_nenewie = m_hamer > 30 ? et_months[5] + " " + (m_hamer % 30) : metqi > 14 ? et_months[4] + " " + m_hamer : et_months[5] + " " + m_hamer;
    //console.log(tsome_nenewie);
    let tn = tsome_nenewie.split(' ', 2);
    let nenewie = `${num_months[tn[0]]}-${tn[1]}`;
    //console.log(nenewie);
    let nn = nenewie.split('-', 2);
    let nm = parseInt(nn[0]);
    let nd = parseInt(nn[1]);
    const negarit = [];
    for (const [i, j, k] of tewsak) {
        let d = nd + j;
        let m = d > 30 ? nm + i + 1 : nm + i;
        d = d > 30 ? d % 30 : d;
        let element = `${k}:${n_year}-${m}-${d}`;
        negarit.push(element);
    };
    //console.log(negarit);

    return negarit;
}

let check = solve_bahrehasab('2015-02-18');
console.log(check);