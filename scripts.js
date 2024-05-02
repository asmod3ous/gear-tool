document.getElementById('import').onclick = function () {


  var files = document.getElementById('selectFiles').files;

  if (files.length <= 0) {
    return false;
  }

  var mylist = document.getElementById("myList");
  var toCompare = mylist.options[mylist.selectedIndex].value


  const dontshow_topspeed = document.getElementById('dontshow_topspeed').checked;
  var fr = new FileReader();

  fr.onload = function (e) {
    var result = JSON.parse(e.target.result);
    var items = result.items;
    var text = "";
    var total90 = 0
    var totaleq_80 = 0
    var total90_75 = 0
    var total90_70 = 0
    var total90_88_75 = 0
    var total90_88_70 = 0
    var total90_85_75 = 0
    var total90_85_70 = 0

    var totalspeed_22 = 0
    var totalspeed_20 = 0
    var totalspeed_18 = 0
    var totalspeed_sp_22 = 0
    var totalspeed_sp_20 = 0
    var totalspeed_sp_18 = 0

    var total_gear_dps_75 = 0
    var total_gear_support_72 = 0
    var total_gear_bruser_75 = 0


    var total_gear_dps = 0
    var total_gear_support = 0
    var total_gear_bruser = 0

    var total_gear_init = 0
    var total_gear_cleave = 0
    var total_gear_fastsupport = 0
    var total_gear_res = 0

    var total_roll_5_attack = 0
    var total_roll_5_health = 0
    var total_roll_5_def = 0

    var total_roll_6_eff = 0;
    var total_roll_6_eff_65 = 0;

    var top_speed = []
    var top_EffectResistancePercent = []
    var top_Attack = []
    var top_AttackPercent = []
    var top_CriticalHitChancePercent = []
    var top_CriticalHitDamagePercent = []
    var top_Defense = []
    var top_DefensePercent = []
    var top_EffectivenessPercent = []
    var top_Health = []
    var top_HealthPercent = []

    var speed_weapon = []
    var speed_helmet = []
    var speed_Armor = []
    var speed_neck = []
    var speed_ring = []

    var speed_weapon_s = []
    var speed_helmet_s = []
    var speed_Armor_s = []
    var speed_neck_s = []
    var speed_ring_s = []

    for (var i = 0; i < items.length; i++) {
      var obj = items[i];
      var speed = obj['reforgedStats']["Speed"];
      top_speed.push(speed)

      if (obj["gear"] == "Weapon") {
        speed_weapon.push(speed)
        if (obj["set"] == "SpeedSet") {
          speed_weapon_s.push(speed)
        }
      }

      if (obj["gear"] == "Helmet") {
        speed_helmet.push(speed)
        if (obj["set"] == "SpeedSet") {
          speed_helmet_s.push(speed)
        }
      }


      if (obj["gear"] == "Armor") {
        speed_Armor.push(speed)
        if (obj["set"] == "SpeedSet") {
          speed_Armor_s.push(speed)
        }
      }

      if (obj["gear"] == "Necklace") {
        speed_neck.push(speed)
        if (obj["set"] == "SpeedSet") {
          speed_neck_s.push(speed)
        }
      }


      if (obj["gear"] == "Ring") {
        speed_ring.push(speed)
        if (obj["set"] == "SpeedSet") {
          speed_ring_s.push(speed)
        }
      }

      var res = obj['reforgedStats']["EffectResistancePercent"];
      res = Number(res)
      top_EffectResistancePercent.push(res)

      var attack = obj['reforgedStats']["Attack"];
      attack = Number(attack)
      top_Attack.push(attack)

      var attackp = obj['reforgedStats']["AttackPercent"];
      attackp = Number(attackp)
      top_AttackPercent.push(attackp)

      var cc = obj['reforgedStats']["CriticalHitChancePercent"];
      cc = Number(cc)
      top_CriticalHitChancePercent.push(cc)

      var cd = obj['reforgedStats']["CriticalHitDamagePercent"];
      cd = Number(cd)
      top_CriticalHitDamagePercent.push(cd)

      var def = obj['reforgedStats']["Defense"];
      def = Number(def)
      top_Defense.push(def)

      var defp = obj['reforgedStats']["DefensePercent"];
      defp = Number(defp)
      top_DefensePercent.push(defp)

      var eff = obj['reforgedStats']["EffectivenessPercent"];
      eff = Number(eff)
      top_EffectivenessPercent.push(eff)

      var health = obj['reforgedStats']["Health"];
      health = Number(health)
      top_Health.push(health)

      var healthp = obj['reforgedStats']["HealthPercent"];
      healthp = Number(healthp)
      top_HealthPercent.push(healthp)

      var eff_rolls = 0
      for (j = 0; j < obj['substats'].length; j++) {
        var rolls = obj['substats'][j]['rolls']
        rolls = Number(rolls)

        if (obj['substats'][j].type == 'Attack' && rolls >= 5)
          total_roll_5_attack++

        if (obj['substats'][j].type == 'Health' && rolls >= 5)
          total_roll_5_health++

        if (obj['substats'][j].type == 'Defense' && rolls >= 5)
          total_roll_5_def++

        if (obj['substats'][j].type == 'EffectivenessPercent')
          eff_rolls += rolls
        if (obj['substats'][j].type == 'EffectResistancePercent')
          eff_rolls += rolls
      }

      if (eff_rolls >= 6) {
        total_roll_6_eff++
        if (equip_score <= 65)
          total_roll_6_eff_65++
      }

      if (speed >= 18)
        totalspeed_18++
      if (speed >= 20)
        totalspeed_20++
      if (speed >= 22)
        totalspeed_22++
      if (obj["set"] == "SpeedSet") {
        if (speed >= 18)
          totalspeed_sp_18++
        if (speed >= 20)
          totalspeed_sp_20++
        if (speed >= 22)
          totalspeed_sp_22++
      }

      var equip_score = obj['reforgedWss']
      equip_score = Number(equip_score)

      var level = obj['level']
      level = Number(level)
      if (level == 90) {
        total90++
        if (equip_score >= 70) {
          total90_70++
        }
        if (equip_score >= 75) {
          total90_75++
        }
      }
      if (level == 88) {
        if (equip_score >= 70) {
          total90_88_70++
        }
        if (equip_score >= 75) {
          total90_88_75++
        }
      }
      if (level == 85) {
        if (equip_score >= 70) {
          total90_85_70++
        }
        if (equip_score >= 75) {
          total90_85_75++
        }
      }
      if (equip_score >= 80) {
        totaleq_80++
      }

      var dps_score = obj['dpsWss']
      dps_score = Number(dps_score)

      var support_score = obj['supportWss']
      support_score = Number(support_score)

      var combat_score = obj['combatWss']
      combat_score = Number(combat_score)

      if (dps_score >= 75) {
        total_gear_dps_75++
      }
      if (support_score >= 72) {
        total_gear_support_72++
      }
      if (combat_score >= 75) {
        total_gear_bruser_75++
      }

      if (dps_score >= 70) {
        total_gear_dps++
      }
      if (support_score >= 67) {
        total_gear_support++
      }
      if (combat_score >= 70) {
        total_gear_bruser++
      }


      if (obj["set"] == "SpeedSet" && speed >= 20) {
        total_gear_init++
      }
      if (obj["set"] != "SpeedSet" && speed >= 22) {
        total_gear_init++
      }

      if (dps_score >= 70 && speed >= 15) {
        total_gear_cleave++
      }

      if (res >= 28) {
        total_gear_res++
      }

      if (support_score >= 67 && speed >= 15) {
        total_gear_fastsupport++
      }
    }


    speed_weapon = Math.max(...speed_weapon)
    speed_helmet = Math.max(...speed_helmet)
    speed_Armor = Math.max(...speed_Armor)
    speed_neck = Math.max(...speed_neck)
    speed_ring = Math.max(...speed_ring)

    speed_weapon_s = Math.max(...speed_weapon_s)
    speed_helmet_s = Math.max(...speed_helmet_s)
    speed_Armor_s = Math.max(...speed_Armor_s)
    speed_neck_s = Math.max(...speed_neck_s)
    speed_ring_s = Math.max(...speed_ring_s)

    speed_diff = [speed_weapon - speed_weapon_s, speed_helmet - speed_helmet_s,
    speed_Armor - speed_Armor_s, speed_neck - speed_neck_s, speed_ring - speed_ring_s]
    speed_diff.sort();

    gear_speed = speed_weapon_s + speed_helmet_s + speed_Armor_s + speed_neck_s + speed_ring_s
    gear_speed += speed_diff[4] + speed_diff[3]
    ran_speed = 161 + gear_speed + 45
    lots_speed = 146 + gear_speed + 45
    
    var formatted = JSON.stringify(items, null, 2);
    if (!dontshow_topspeed) {
      text = text + "Fastest Ran: " + ran_speed + "\n"
      text = text + "Fastest A.lots: " + lots_speed + "\n"
      text = text + "\n"
    }
    text = text + "80+ Total: " + totaleq_80 + "\n"
    text = text + "90 Total: " + total90 + "\n"
    text = text + "90 Total 75+: " + total90_75 + "\n"
    text = text + "90 Total 70+: " + total90_70 + "\n"
    text = text + "88 Total 75+: " + total90_88_75 + "\n"
    text = text + "88 Total 70+: " + total90_88_70 + "\n"
    text = text + "85 Total 75+: " + total90_85_75 + "\n"
    text = text + "85 Total 70+: " + total90_85_70 + "\n"
    text = text + "\n"
    text = text + "22 Speed+: " + totalspeed_22 + "\n"
    text = text + "20 Speed+: " + totalspeed_20 + "\n"
    text = text + "18 Speed+: " + totalspeed_18 + "\n"
    text = text + "22 Speed+ set Speed: " + totalspeed_sp_22 + "\n"
    text = text + "20 Speed+ set Speed: " + totalspeed_sp_20 + "\n"
    text = text + "18 Speed+ set Speed: " + totalspeed_sp_18 + "\n"
    text = text + "\n"
    text = text + "Gear DPS 75 GS +: " + total_gear_dps_75 + "\n"
    text = text + "Gear Support 72 GS +: " + total_gear_support_72 + "\n"
    text = text + "Gear Bruiser 75 GS +: " + total_gear_bruser_75 + "\n"
    text = text + "Gear DPS 70 GS +: " + total_gear_dps + "\n"
    text = text + "Gear Support 67 GS +: " + total_gear_support + "\n"
    text = text + "Gear Bruiser 70 GS +: " + total_gear_bruser + "\n"
    text = text + "20+ Speed Set o 22+ Broken: " + total_gear_init + "\n"
    text = text + "15+ DPS 70 GS Total+: " + total_gear_cleave + "\n"
    text = text + "15+ Support 67 GS Total+: " + total_gear_fastsupport + "\n"
    text = text + "Gear Effect Resist 28+: " + total_gear_res + "\n"

    mb = [total_gear_cleave / 16, total_gear_dps / 60, total_gear_dps_75 / 12, (lots_speed - 185) / 122,
    totalspeed_22 / 20, totalspeed_sp_22 / 10, totalspeed_sp_20 / 25, totalspeed_sp_18 / 65,
    total_gear_bruser / 346, total_gear_bruser_75 / 60,
    total_gear_fastsupport / 25, total_gear_support / 75, total_gear_support_72 / 12,
    total90 / 1688, total90_75 / 94]

    speedscore = Math.pow(mb[3], 1 / (2 - (300 - lots_speed) / 20)) * 0.88 + Math.sqrt(Math.sqrt(mb[4])) * 0.03 + Math.sqrt(Math.sqrt(Math.max(mb[5], 0.05))) * 0.03 + Math.sqrt(mb[6]) * 0.03 + Math.sqrt(mb[7]) * 0.03;

    d5 = [(Math.sqrt(Math.sqrt(mb[0])) * 0.2 + Math.sqrt(Math.sqrt(Math.sqrt(mb[1]))) * 0.4 + Math.sqrt(Math.sqrt(mb[2])) * 0.4),
      speedscore,
    (Math.sqrt(Math.sqrt(mb[8])) * 0.3 + Math.sqrt(Math.sqrt(mb[9])) * 0.7),
    (Math.sqrt(Math.sqrt(mb[10])) + Math.sqrt(Math.sqrt(mb[11])) + Math.sqrt(Math.sqrt(mb[12]))) / 3,
    (Math.sqrt(Math.sqrt(Math.sqrt(mb[13]))) * 0.4 + Math.sqrt(Math.sqrt(Math.sqrt(mb[14]))) * 0.6)]


    d5 = [Math.round(d5[0] * 100), Math.round(d5[1] * 100), Math.round(d5[2] * 100), Math.round(d5[3] * 100), Math.round(d5[4] * 100)]
  
    var marksCanvas = document.getElementById("marksChart");
   
    d5_s = d5.slice()
    d5_s.sort();
    overall = (d5_s[1] * 0.15 + d5_s[2] * 0.15 + d5_s[3] * 0.2 + d5_s[4] * 0.5)
    
    d6 = [d5[0],d5[1],d5[2],d5[3],overall]

    var toCompareData = {}
    toCompareData["plain100"] = [100, 100, 100, 100, 100.0]
    toCompareData["plain150"] = [150, 150, 150, 150, 150.0]
    toCompareData["Ragnoelt4"] = [79, 92, 90, 86, 90.4]
    toCompareData["Kundalt"] = [86, 88, 99, 82, 94.2]
    toCompareData["Bloodance"] = [89, 92, 97, 76, 93.9]
    toCompareData["Monochico1"] = [77, 86, 88, 65, 85.35]
    toCompareData["Asmod3ous"] = [80, 81, 81, 73, 81.35]
    toCompareData["Waffle"] = [104, 95, 112, 104, 101.1]
    toCompareData["Lusira"] = [115, 99, 112, 104, 104.9]
    toCompareData["Anl"] = [101, 97, 89, 83, 92.7]
    toCompareData["Jenazad"] = [101, 93, 103, 91, 95.7]
    toCompareData["dZanderr"] = [103, 100, 113, 110, 109.1]
    toCompareData["Exefalse"] = [77, 90, 90, 87, 89.25]
    toCompareData["TristenWulf"] = [99, 97, 99, 85, 98.25]
    toCompareData["Lacari"] = [95, 95, 99, 95, 97]
    toCompareData["TheRubyRose"] = [86, 95, 103, 95, 94.65]
    toCompareData["ELPGP1"] = [100, 99, 104, 106, 100.4]


    labelCompare = toCompare
    dataCompare = toCompareData[toCompare]

    var chartColors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(231,233,237)'
    };
    var color = Chart.helpers.color;


    var marksData = {
      labels: ["Damage", "Speed", "Bruiser", "Support", "Overall"],
      datasets: [{
        label: "You",
        data: d6,
        fill: true,
        backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
        borderColor: chartColors.red,
        pointBackgroundColor: chartColors.red,

      }, {
        label: toCompare,
        data: dataCompare,
        fill: true,
        backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
        borderColor: chartColors.blue,
        pointBackgroundColor: chartColors.blue,
      }]

    };

    const plugin = {
      id: 'customCanvasBackgroundColor',
      beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#99ffff';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };

    var radarChart = new Chart(marksCanvas, {
      type: 'radar',
      data: marksData,
      elements: {
        line: {
          borderWidth: 1
        }
      },
      legend: {
        position: 'top',
        labels: {
          fontColor: 'white'
        }
      },
      title: {
        display: true,
        text: 'Comparative Chart',
        fontColor: 'white'
      },
      scale: {
        ticks: {
          beginAtZero: true,
          steps: 5,
          fontColor: 'white', 
          showLabelBackdrop: false 
        },
        pointLabels: {
          fontColor: 'white' 
        },
        gridLines: {
          color: 'rgba(255, 255, 255, 0.2)'
        },
        angleLines: {
          color: 'white' 
        }
      },
      options: {
        plugins: {
          customCanvasBackgroundColor: {
            color: 'white',
          }
        },
        scale: {
          min: 30,
        },
      },
      plugins: [plugin],

    });




    text = text + "\n"

    text = text + "Damage: " + d5[0] + " (" + dataCompare[0] + ")\n"
    text = text + "Speed: " + d5[1] + " (" + dataCompare[1] + ")\n"
    text = text + "Bruiser: " + d5[2] + " (" + dataCompare[2] + ")\n"
    text = text + "Support: " + d5[3] + " (" + dataCompare[3] + ")\n"
    text = text + "Quantity: " + d5[4] + "\n"

    text = text + "Overall : " + overall + " (" + dataCompare[4] + ")\n"

    text = text + "\n"
    text = text + "\n"

    if (!dontshow_topspeed) {
      text = text + "Maximum Speed: " + Math.max(...top_speed) + "\n"
    }
    text = text + "Max. ATK (flat): " + Math.max(...top_Attack) + "\n"
    text = text + "Max. ATK %: " + Math.max(...top_AttackPercent) + "\n"
    text = text + "Max. Critical Chance: " + Math.max(...top_CriticalHitChancePercent) + "\n"
    text = text + "Max. Critical Damage: " + Math.max(...top_CriticalHitDamagePercent) + "\n"
    text = text + "Max. Defense (flat): " + Math.max(...top_Defense) + "\n"
    text = text + "Max. Defense %: " + Math.max(...top_DefensePercent) + "\n"
    text = text + "Max. Health (flat): " + Math.max(...top_Health) + "\n"
    text = text + "Max. Health %: " + Math.max(...top_HealthPercent) + "\n"
    text = text + "Max. Efectiveness: " + Math.max(...top_EffectivenessPercent) + "\n"
    text = text + "Max. Effect Resist: " + Math.max(...top_EffectResistancePercent) + "\n"
    text = text + "Penta roll ATK (flat): " + total_roll_5_attack + "\n"
    text = text + "Penta roll Health (flat): " + total_roll_5_health + "\n"
    text = text + "Penta Roll Defense (flat): " + total_roll_5_def + "\n"

    text = text + "6 rolls Efectiveness/Effect Resist: " + total_roll_6_eff + "\n"
    text = text + "Gear Wasted e/er (65-): " + total_roll_6_eff_65 + "\n"


    document.getElementById('result').value = text;


    enhanceMap = { "Weapon": [], "Helmet": [], "Armor": [], "Necklace": [], "Ring": [] }
    for (var i = 0; i < items.length; i++) {
      var obj = items[i];
      var speed = obj['reforgedStats']["Speed"];
      var enhance = obj["enhance"]
      var level = obj["level"]
      var rank = obj["rank"]
      var set = obj["set"]
      var gear = obj["gear"]
      if (gear == "Boots") {
        continue
      }
      if (enhance == 15) {
        continue
      }
      if (rank == "Epic" && enhance == 12 && level == 85) {
        if (set == "SpeedSet" && speed >= 13) {
          enhanceMap[gear].push(obj)
        }
        if (set != "SpeedSet" && speed >= 15) {
          enhanceMap[gear].push(obj)
        }
      }
      if (rank == "Heroic" && enhance == 12 && level == 85) {
        if (set == "SpeedSet" && speed >= 13) {
          enhanceMap[gear].push(obj)
        }
        if (set != "SpeedSet" && speed >= 15) {
          enhanceMap[gear].push(obj)
        }
      }

      if (rank == "Epic" && enhance == 9 && level == 85) {
        if (set == "SpeedSet" && speed >= 9) {
          enhanceMap[gear].push(obj)
        }
        if (set != "SpeedSet" && speed >= 11) {
          enhanceMap[gear].push(obj)
        }
      }
      if (rank == "Heroic" && enhance == 9 && level == 85) {
        if (set == "SpeedSet" && speed >= 13) {
          enhanceMap[gear].push(obj)
        }
        if (set != "SpeedSet" && speed >= 15) {
          enhanceMap[gear].push(obj)
        }
      }

      if (rank == "Epic" && enhance == 6 && level == 85) {
        if (set == "SpeedSet" && speed >= 5) {
          enhanceMap[gear].push(obj)
        }
        if (set != "SpeedSet" && speed >= 7) {
          enhanceMap[gear].push(obj)
        }
      }
      if (rank == "Heroic" && enhance == 6 && level == 85) {
        if (set == "SpeedSet" && speed >= 9) {
          enhanceMap[gear].push(obj)
        }
        if (set != "SpeedSet" && speed >= 11) {
          enhanceMap[gear].push(obj)
        }
      }

      if (rank == "Epic" && enhance == 3 && level == 85) {
        if (set == "SpeedSet" && speed >= 2) {
          enhanceMap[gear].push(obj)
        }
        if (set != "SpeedSet" && speed >= 2) {
          enhanceMap[gear].push(obj)
        }
      }
      if (rank == "Heroic" && enhance == 3 && level == 85) {
        if (set == "SpeedSet" && speed >= 5) {
          enhanceMap[gear].push(obj)
        }
        if (set != "SpeedSet" && speed >= 7) {
          enhanceMap[gear].push(obj)
        }
      }
    }
    toEnhanceText = ""
    transalte = { "Weapon": "Weapon", "Helmet": "Helmet", "Armor": "Armor", "Necklace": "Necklace", "Ring": "Ring", "Epic": "Epic", "Heroic": "Heroic" }
    for (var m in enhanceMap) {
      objs = enhanceMap[m]
      for (var i = 0; i < objs.length; i++) {
        var obj = objs[i];
        var speed = obj['augmentedStats']["Speed"];
        var speedRef = obj['reforgedStats']["Speed"];
        var enhance = obj["enhance"]
        var level = obj["level"]
        var rank = obj["rank"]
        var set = obj["set"]
        var gear = obj["gear"]
        if (gear)


          toEnhanceText = toEnhanceText + obj["set"] + " " + transalte[rank] + " +" + enhance + " " + transalte[gear] + " : " + speed + "(" + speedRef + ") Speed" + "\n"
      }
    }

    document.getElementById('result2').value = toEnhanceText;
    
    document.getElementById("tspeed").innerText = Math.max(...top_speed);
    document.getElementById("prog_tspeed").setAttribute('aria-valuenow', Math.max(...top_speed));
    document.getElementById("prog_tspeed").setAttribute('style', 'width:'+(Math.max(...top_speed) * 100) / 30 + '%' );
    document.getElementById("tatk").innerText = Math.max(...top_AttackPercent);
    document.getElementById("prog_tatk").setAttribute('aria-valuenow', Math.max(...top_AttackPercent));
    document.getElementById("prog_tatk").setAttribute('style', 'width:'+(Math.max(...top_AttackPercent) * 100) / 65 + '%' );
    document.getElementById("tdef").innerText = Math.max(...top_DefensePercent);
    document.getElementById("prog_tdef").setAttribute('aria-valuenow', Math.max(...top_DefensePercent));
    document.getElementById("prog_tdef").setAttribute('style', 'width:'+(Math.max(...top_DefensePercent) * 100) / 65 + '%' );
    document.getElementById("tchc").innerText = Math.max(...top_CriticalHitChancePercent);
    document.getElementById("prog_tchc").setAttribute('aria-valuenow', Math.max(...top_CriticalHitChancePercent));
    document.getElementById("prog_tchc").setAttribute('style', 'width:'+(Math.max(...top_CriticalHitChancePercent) * 100) / 50 + '%' );
    document.getElementById("tcd").innerText = Math.max(...top_CriticalHitDamagePercent);
    document.getElementById("prog_tcd").setAttribute('aria-valuenow', Math.max(...top_CriticalHitDamagePercent));
    document.getElementById("prog_tcd").setAttribute('style', 'width:'+(Math.max(...top_CriticalHitDamagePercent) * 100) /  60 + '%' );
    document.getElementById("overall").innerText = overall;
    document.getElementById("prog_overall").setAttribute('aria-valuenow', overall);
    document.getElementById("prog_overall").setAttribute('style', 'width:'+(overall * 100) /  120 + '%' );
  }


  $('#alerts-checks').show();
  fr.readAsText(files.item(0));
}; 
