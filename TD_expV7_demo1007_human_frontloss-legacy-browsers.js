/****************************************** 
 * Td_Expv7_Demo1007_Human_Frontloss Test *
 ******************************************/


// store info about the experiment session:
let expName = 'TD_expV7_demo1007_human_frontloss';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trials_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_5LoopBegin(trials_5LoopScheduler));
flowScheduler.add(trials_5LoopScheduler);
flowScheduler.add(trials_5LoopEnd);
flowScheduler.add(logotestintroRoutineBegin());
flowScheduler.add(logotestintroRoutineEachFrame());
flowScheduler.add(logotestintroRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
const trials_9LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_9LoopBegin(trials_9LoopScheduler));
flowScheduler.add(trials_9LoopScheduler);
flowScheduler.add(trials_9LoopEnd);
flowScheduler.add(PHASE2intro_roleRoutineBegin());
flowScheduler.add(PHASE2intro_roleRoutineEachFrame());
flowScheduler.add(PHASE2intro_roleRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
const trials_10LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_10LoopBegin(trials_10LoopScheduler));
flowScheduler.add(trials_10LoopScheduler);
flowScheduler.add(trials_10LoopEnd);
const trials_6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_6LoopBegin(trials_6LoopScheduler));
flowScheduler.add(trials_6LoopScheduler);
flowScheduler.add(trials_6LoopEnd);
flowScheduler.add(ph2scaleintroRoutineBegin());
flowScheduler.add(ph2scaleintroRoutineEachFrame());
flowScheduler.add(ph2scaleintroRoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);
flowScheduler.add(PHASE3instrRoutineBegin());
flowScheduler.add(PHASE3instrRoutineEachFrame());
flowScheduler.add(PHASE3instrRoutineEnd());
const trials_12LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_12LoopBegin(trials_12LoopScheduler));
flowScheduler.add(trials_12LoopScheduler);
flowScheduler.add(trials_12LoopEnd);
const trials_14LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_14LoopBegin(trials_14LoopScheduler));
flowScheduler.add(trials_14LoopScheduler);
flowScheduler.add(trials_14LoopEnd);
flowScheduler.add(ph3_prequestionRoutineBegin());
flowScheduler.add(ph3_prequestionRoutineEachFrame());
flowScheduler.add(ph3_prequestionRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(stopRoutineBegin());
flowScheduler.add(stopRoutineEachFrame());
flowScheduler.add(stopRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'img/img_person/student15.png', 'path': 'img/img_person/student15.png'},
    {'name': 'img/img_instruction/PHASE3instr_3_4.png', 'path': 'img/img_instruction/PHASE3instr_3_4.png'},
    {'name': 'cond/PHASE3intro_2_cond.xlsx', 'path': 'cond/PHASE3intro_2_cond.xlsx'},
    {'name': 'img/img_person/student2.png', 'path': 'img/img_person/student2.png'},
    {'name': 'img/img_instruction/PHASE3instr_3_5.png', 'path': 'img/img_instruction/PHASE3instr_3_5.png'},
    {'name': 'img/img_axis/ph2stimuli3.png', 'path': 'img/img_axis/ph2stimuli3.png'},
    {'name': 'img/img_person/student7.png', 'path': 'img/img_person/student7.png'},
    {'name': 'img/img_person/py21.png', 'path': 'img/img_person/py21.png'},
    {'name': 'img/img_person/py14.png', 'path': 'img/img_person/py14.png'},
    {'name': 'img/img_instruction/PHASE3instr_2_2.png', 'path': 'img/img_instruction/PHASE3instr_2_2.png'},
    {'name': 'cond/ph2_stimuli_cond.xlsx', 'path': 'cond/ph2_stimuli_cond.xlsx'},
    {'name': 'img/img_axis/ph2stimuli2.png', 'path': 'img/img_axis/ph2stimuli2.png'},
    {'name': 'img/img_person/myself18.png', 'path': 'img/img_person/myself18.png'},
    {'name': 'img/img_person/myself14.png', 'path': 'img/img_person/myself14.png'},
    {'name': 'img/img_person/over.png', 'path': 'img/img_person/over.png'},
    {'name': 'img/img_instruction/ph2scale5.png', 'path': 'img/img_instruction/ph2scale5.png'},
    {'name': 'img/img_person/pass.png', 'path': 'img/img_person/pass.png'},
    {'name': 'img/img_instruction/ph2stimuli_instr4.png', 'path': 'img/img_instruction/ph2stimuli_instr4.png'},
    {'name': 'img/img_person/myself20.png', 'path': 'img/img_person/myself20.png'},
    {'name': 'img/img_person/myself16.png', 'path': 'img/img_person/myself16.png'},
    {'name': 'img/img_person/py16.png', 'path': 'img/img_person/py16.png'},
    {'name': 'img/img_person/student11.png', 'path': 'img/img_person/student11.png'},
    {'name': 'img/img_instruction/ph2scale2.png', 'path': 'img/img_instruction/ph2scale2.png'},
    {'name': 'img/img_person/wrong.png', 'path': 'img/img_person/wrong.png'},
    {'name': 'img/img_instruction/PHASE2intropre3.png', 'path': 'img/img_instruction/PHASE2intropre3.png'},
    {'name': 'img/img_instruction/PHASE2intropre2.png', 'path': 'img/img_instruction/PHASE2intropre2.png'},
    {'name': 'img/img_person/py18.png', 'path': 'img/img_person/py18.png'},
    {'name': 'img/img_instruction/ph2scale3.png', 'path': 'img/img_instruction/ph2scale3.png'},
    {'name': 'img/img_person/student1.png', 'path': 'img/img_person/student1.png'},
    {'name': 'img/img_person/student12.png', 'path': 'img/img_person/student12.png'},
    {'name': 'img/img_instruction/ph2scale6.png', 'path': 'img/img_instruction/ph2scale6.png'},
    {'name': 'img/img_person/student18.png', 'path': 'img/img_person/student18.png'},
    {'name': 'img/img_person/myself2.png', 'path': 'img/img_person/myself2.png'},
    {'name': 'img/img_person/student10.png', 'path': 'img/img_person/student10.png'},
    {'name': 'img/img_person/student6.png', 'path': 'img/img_person/student6.png'},
    {'name': 'img/img_instruction/PHASE2intropre1.png', 'path': 'img/img_instruction/PHASE2intropre1.png'},
    {'name': 'cond/PHASE2intropre.xlsx', 'path': 'cond/PHASE2intropre.xlsx'},
    {'name': 'img/img_person/myself9.png', 'path': 'img/img_person/myself9.png'},
    {'name': 'img/img_person/person_opt8.png', 'path': 'img/img_person/person_opt8.png'},
    {'name': 'img/img_person/person_opt3.png', 'path': 'img/img_person/person_opt3.png'},
    {'name': 'img/img_instruction/ph2scale7.png', 'path': 'img/img_instruction/ph2scale7.png'},
    {'name': 'img/img_instruction/intro_img.png', 'path': 'img/img_instruction/intro_img.png'},
    {'name': 'img/img_person/student14.png', 'path': 'img/img_person/student14.png'},
    {'name': 'img/img_person/myself7.png', 'path': 'img/img_person/myself7.png'},
    {'name': 'img/img_person/student5.png', 'path': 'img/img_person/student5.png'},
    {'name': 'img/img_button/5button.png', 'path': 'img/img_button/5button.png'},
    {'name': 'cond/myself_cond0914.xlsx', 'path': 'cond/myself_cond0914.xlsx'},
    {'name': 'img/img_person/py22.png', 'path': 'img/img_person/py22.png'},
    {'name': 'img/img_person/student16.png', 'path': 'img/img_person/student16.png'},
    {'name': 'img/img_person/py9.png', 'path': 'img/img_person/py9.png'},
    {'name': 'img/img_person/person_opt5.png', 'path': 'img/img_person/person_opt5.png'},
    {'name': 'img/img_instruction/PHASE3question.png', 'path': 'img/img_instruction/PHASE3question.png'},
    {'name': 'img/img_person/myself12.png', 'path': 'img/img_person/myself12.png'},
    {'name': 'img/img_person/blank.png', 'path': 'img/img_person/blank.png'},
    {'name': 'cond/ph2v2pre_cond.xlsx', 'path': 'cond/ph2v2pre_cond.xlsx'},
    {'name': 'img/img_person/myself8.png', 'path': 'img/img_person/myself8.png'},
    {'name': 'img/img_instruction/PHASE3instr_2_5.png', 'path': 'img/img_instruction/PHASE3instr_2_5.png'},
    {'name': 'img/img_instruction/PHASE3instr_2_1.png', 'path': 'img/img_instruction/PHASE3instr_2_1.png'},
    {'name': 'img/img_person/py3.png', 'path': 'img/img_person/py3.png'},
    {'name': 'img/img_person/myself4.png', 'path': 'img/img_person/myself4.png'},
    {'name': 'img/img_person/myself15.png', 'path': 'img/img_person/myself15.png'},
    {'name': 'img/img_instruction/PHASE3instr_3_1.png', 'path': 'img/img_instruction/PHASE3instr_3_1.png'},
    {'name': 'img/img_person/person_opt1.png', 'path': 'img/img_person/person_opt1.png'},
    {'name': 'img/img_axis/ph2stimuli5(2).png', 'path': 'img/img_axis/ph2stimuli5(2).png'},
    {'name': 'img/img_person/student13.png', 'path': 'img/img_person/student13.png'},
    {'name': 'img/img_person/py15.png', 'path': 'img/img_person/py15.png'},
    {'name': 'img/img_person/py10.png', 'path': 'img/img_person/py10.png'},
    {'name': 'cond/PHASE3intro_3_cond.xlsx', 'path': 'cond/PHASE3intro_3_cond.xlsx'},
    {'name': 'img/img_person/person_opt9.png', 'path': 'img/img_person/person_opt9.png'},
    {'name': 'img/img_button/4button.png', 'path': 'img/img_button/4button.png'},
    {'name': 'img/img_instruction/logotestintro.png', 'path': 'img/img_instruction/logotestintro.png'},
    {'name': 'img/img_instruction/PHASE3instr_2_3.png', 'path': 'img/img_instruction/PHASE3instr_2_3.png'},
    {'name': 'img/img_instruction/PHASE2intro_pic.png', 'path': 'img/img_instruction/PHASE2intro_pic.png'},
    {'name': 'img/img_instruction/ph2stimuli_instr3.png', 'path': 'img/img_instruction/ph2stimuli_instr3.png'},
    {'name': 'cond/cond0901.xlsx', 'path': 'cond/cond0901.xlsx'},
    {'name': 'img/img_axis/ph2stimuli1.png', 'path': 'img/img_axis/ph2stimuli1.png'},
    {'name': 'img/img_person/student19.png', 'path': 'img/img_person/student19.png'},
    {'name': 'img/img_instruction/PHASE3instr_3_3.png', 'path': 'img/img_instruction/PHASE3instr_3_3.png'},
    {'name': 'img/img_person/person_opt7.png', 'path': 'img/img_person/person_opt7.png'},
    {'name': 'img/img_instruction/PHASE3instr_3_6.png', 'path': 'img/img_instruction/PHASE3instr_3_6.png'},
    {'name': 'img/img_person/py12.png', 'path': 'img/img_person/py12.png'},
    {'name': 'img/img_person/myself3.png', 'path': 'img/img_person/myself3.png'},
    {'name': 'img/img_person/py11.png', 'path': 'img/img_person/py11.png'},
    {'name': 'img/img_person/myself6.png', 'path': 'img/img_person/myself6.png'},
    {'name': 'img/img_person/py4.png', 'path': 'img/img_person/py4.png'},
    {'name': 'img/img_person/student9.png', 'path': 'img/img_person/student9.png'},
    {'name': 'img/img_person/person_opt4.png', 'path': 'img/img_person/person_opt4.png'},
    {'name': 'img/img_axis/ph2stimuli1(2).png', 'path': 'img/img_axis/ph2stimuli1(2).png'},
    {'name': 'img/img_instruction/ph2scale4.png', 'path': 'img/img_instruction/ph2scale4.png'},
    {'name': 'img/img_person/py7.png', 'path': 'img/img_person/py7.png'},
    {'name': 'img/img_axis/ph2stimuli3(2).png', 'path': 'img/img_axis/ph2stimuli3(2).png'},
    {'name': 'img/img_person/myself19.png', 'path': 'img/img_person/myself19.png'},
    {'name': 'img/img_instruction/PHASE3instr_2_4.png', 'path': 'img/img_instruction/PHASE3instr_2_4.png'},
    {'name': 'img/img_axis/ph2stimuli2(2).png', 'path': 'img/img_axis/ph2stimuli2(2).png'},
    {'name': 'img/img_person/right.png', 'path': 'img/img_person/right.png'},
    {'name': 'img/img_instruction/ph2stimuli_instr5.png', 'path': 'img/img_instruction/ph2stimuli_instr5.png'},
    {'name': 'img/img_person/person_opt2.png', 'path': 'img/img_person/person_opt2.png'},
    {'name': 'img/img_person/py20.png', 'path': 'img/img_person/py20.png'},
    {'name': 'img/img_person/py1.png', 'path': 'img/img_person/py1.png'},
    {'name': 'img/img_instruction/ph3instr.png', 'path': 'img/img_instruction/ph3instr.png'},
    {'name': 'cond/ph2scales.xlsx', 'path': 'cond/ph2scales.xlsx'},
    {'name': 'img/img_instruction/ph2scale1.png', 'path': 'img/img_instruction/ph2scale1.png'},
    {'name': 'img/img_person/myself17.png', 'path': 'img/img_person/myself17.png'},
    {'name': 'img/img_person/student8.png', 'path': 'img/img_person/student8.png'},
    {'name': 'img/img_axis/ph2stimuli6(2).png', 'path': 'img/img_axis/ph2stimuli6(2).png'},
    {'name': 'img/img_person/myself10.png', 'path': 'img/img_person/myself10.png'},
    {'name': 'img/img_person/py6.png', 'path': 'img/img_person/py6.png'},
    {'name': 'img/img_button/3button.jpg', 'path': 'img/img_button/3button.jpg'},
    {'name': 'img/img_person/py17.png', 'path': 'img/img_person/py17.png'},
    {'name': 'img/img_instruction/ph2stimuli_instr2.png', 'path': 'img/img_instruction/ph2stimuli_instr2.png'},
    {'name': 'img/img_instruction/PHASE3instr_3_2.png', 'path': 'img/img_instruction/PHASE3instr_3_2.png'},
    {'name': 'img/img_person/py19.png', 'path': 'img/img_person/py19.png'},
    {'name': 'img/img_person/myself1.png', 'path': 'img/img_person/myself1.png'},
    {'name': 'img/img_instruction/PHASE3instr0928.png', 'path': 'img/img_instruction/PHASE3instr0928.png'},
    {'name': 'cond/TD_cond0922.xlsx', 'path': 'cond/TD_cond0922.xlsx'},
    {'name': 'img/img_axis/ph2stimuli6.png', 'path': 'img/img_axis/ph2stimuli6.png'},
    {'name': 'img/img_person/myself5.png', 'path': 'img/img_person/myself5.png'},
    {'name': 'img/img_person/student3.png', 'path': 'img/img_person/student3.png'},
    {'name': 'img/img_axis/ph2stimuli4.png', 'path': 'img/img_axis/ph2stimuli4.png'},
    {'name': 'img/img_person/py2.png', 'path': 'img/img_person/py2.png'},
    {'name': 'img/img_axis/ph2stimuli4(2).png', 'path': 'img/img_axis/ph2stimuli4(2).png'},
    {'name': 'img/img_person/py13.png', 'path': 'img/img_person/py13.png'},
    {'name': 'img/img_instruction/PHASE2intropre4.png', 'path': 'img/img_instruction/PHASE2intropre4.png'},
    {'name': 'img/img_person/person_opt6.png', 'path': 'img/img_person/person_opt6.png'},
    {'name': 'img/img_person/student17.png', 'path': 'img/img_person/student17.png'},
    {'name': 'img/img_instruction/ph2stimuli_instr6.png', 'path': 'img/img_instruction/ph2stimuli_instr6.png'},
    {'name': 'img/img_person/myself13.png', 'path': 'img/img_person/myself13.png'},
    {'name': 'img/img_person/py8.png', 'path': 'img/img_person/py8.png'},
    {'name': 'img/img_person/myself11.png', 'path': 'img/img_person/myself11.png'},
    {'name': 'img/img_instruction/ph2stimuli_instr1.png', 'path': 'img/img_instruction/ph2stimuli_instr1.png'},
    {'name': 'img/img_person/student20.png', 'path': 'img/img_person/student20.png'},
    {'name': 'img/img_instruction/logotest1intro.png', 'path': 'img/img_instruction/logotest1intro.png'},
    {'name': 'img/img_person/student4.png', 'path': 'img/img_person/student4.png'},
    {'name': 'img/img_person/py5.png', 'path': 'img/img_person/py5.png'},
    {'name': 'img/img_axis/ph2stimuli5.png', 'path': 'img/img_axis/ph2stimuli5.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var introClock;
var list_10;
var myself_img;
var image_myself;
var image_nextbutton;
var mouse_3;
var image_40;
var logotestintroClock;
var image_24;
var image_nextbutton_2;
var mouse_14;
var logotest_1Clock;
var list_1;
var list_2;
var list_3;
var pic_1;
var pic_2;
var pic_3;
var pic_4;
var loc_x_1;
var loc_x_2;
var loc_x_3;
var loc_x_4;
var m;
var pic_show;
var timescountdown;
var img_1;
var img_2;
var img_3;
var img_4;
var mouse_12;
var pic_5;
var pic_logo;
var image_41;
var logotest_2Clock;
var image_25;
var image_28;
var PHASE2introClock;
var image_26;
var mouse_15;
var image_nextbutton_3;
var image_39;
var PHASE2intro_roleClock;
var text_46;
var text_47;
var mouse_22;
var image_52;
var ph2matchClock;
var text_29;
var text_30;
var text_31;
var ph2v2test_codeClock;
var student_IMG;
var list_11;
var time_dw;
var timedown;
var ph2v2testpreClock;
var image_42;
var text_23;
var time_down_numClock;
var list_timedown;
var ph2v2testClock;
var image_29;
var text_27;
var text_24;
var text_26;
var image_30;
var ph2v2test_1Clock;
var startmoney;
var image_31;
var image_32;
var image_33;
var mouse_13;
var text_32;
var ph2scaleintroClock;
var text_21;
var image_nextbutton_4;
var mouse_16;
var ph2scalesClock;
var slider_5;
var image_18;
var text_20;
var image_45;
var mouse_19;
var PHASE3instrClock;
var image_27;
var image_34;
var mouse_17;
var PHASE3instr_2Clock;
var text_43;
var text_42;
var image_37;
var image_38;
var mouse_18;
var image_43;
var image_44;
var PHASE3intr_3Clock;
var image_48;
var image_49;
var image_50;
var image_51;
var text_44;
var text_45;
var mouse_21;
var ph3_prequestionClock;
var image_53;
var image_54;
var mouse_23;
var Ph3Clock;
var day_num1;
var day_num2;
var list_pic1;
var list_pic2;
var temp_1;
var temp_2;
var temp_day1;
var temp_day2;
var list_pic;
var list_pic_days;
var cnt;
var image_ph3instr;
var image_19;
var image_21;
var text_16;
var text_17;
var mouse_10;
var text_22;
var stopClock;
var text_stop;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  list_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  myself_img = "";
  util.shuffle(list_10);
  
  image_myself = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_myself', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.2)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_nextbutton = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_nextbutton', units : undefined, 
    image : 'img/img_button/3button.jpg', mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  image_40 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_40', units : undefined, 
    image : 'img/img_instruction/intro_img.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.1)], size : [1.2, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "logotestintro"
  logotestintroClock = new util.Clock();
  image_24 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_24', units : undefined, 
    image : 'img/img_instruction/logotestintro.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [1.2, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_nextbutton_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_nextbutton_2', units : undefined, 
    image : 'img/img_button/3button.jpg', mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_14 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_14.mouseClock = new util.Clock();
  // Initialize components for Routine "logotest_1"
  logotest_1Clock = new util.Clock();
  list_1 = [1, 2, 3];
  list_2 = [1, 2, 3];
  list_3 = [1, 2, 3];
  pic_1 = "";
  pic_2 = "";
  pic_3 = "";
  pic_4 = "";
  loc_x_1 = 0;
  loc_x_2 = 0;
  loc_x_3 = 0;
  loc_x_4 = 0;
  m = 0;
  pic_show = "";
  timescountdown = "";
  
  img_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  img_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  img_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  img_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  mouse_12 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_12.mouseClock = new util.Clock();
  pic_5 = "";
  pic_logo = "";
  
  image_41 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_41', units : undefined, 
    image : 'img/img_instruction/logotest1intro.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.1)], size : [1.2, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "logotest_2"
  logotest_2Clock = new util.Clock();
  image_25 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_25', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.2)], size : [1.2, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_28 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_28', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.05)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "PHASE2intro"
  PHASE2introClock = new util.Clock();
  image_26 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_26', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_15 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_15.mouseClock = new util.Clock();
  image_nextbutton_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_nextbutton_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_39 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_39', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [0.55, 0.3],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "PHASE2intro_role"
  PHASE2intro_roleClock = new util.Clock();
  text_46 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_46',
    text: '你所在班级被分配的角色是：',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0.03], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_47 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_47',
    text: '承受者',
    font: 'STSong',
    units: undefined, 
    pos: [0, (- 0.03)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse_22 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_22.mouseClock = new util.Clock();
  image_52 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_52', units : undefined, 
    image : 'img/img_button/3button.jpg', mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "ph2match"
  ph2matchClock = new util.Clock();
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: '正在等待决策者进入实验任务页面，请稍等.',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: '正在等待决策者进入实验任务页面，请稍等. .',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: '正在等待决策者进入实验任务页面，请稍等. . .',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "ph2v2test_code"
  ph2v2test_codeClock = new util.Clock();
  student_IMG = "";
  list_11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  util.shuffle(list_11);
  time_dw = 0;
  timedown = "";
  
  // Initialize components for Routine "ph2v2testpre"
  ph2v2testpreClock = new util.Clock();
  image_42 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_42', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: '这位决策者已经上线，马上准备开始任务',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0.03], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "time_down_num"
  time_down_numClock = new util.Clock();
  list_timedown = [2, 3, 4];
  
  // Initialize components for Routine "ph2v2test"
  ph2v2testClock = new util.Clock();
  image_29 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_29', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '决策者正在作出选择.',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0.03], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: '决策者正在作出选择. .',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0.03], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: '决策者正在作出选择. . .',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0.03], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  image_30 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_30', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [0.9, 0.26],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "ph2v2test_1"
  ph2v2test_1Clock = new util.Clock();
  startmoney = 0;
  
  image_31 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_31', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_32 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_32', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [0.95, 0.3],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_33 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_33', units : undefined, 
    image : 'img/img_button/5button.png', mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse_13 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_13.mouseClock = new util.Clock();
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: '',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0.03], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "ph2scaleintro"
  ph2scaleintroClock = new util.Clock();
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: '根据刚才那位同学的所有选择，请评价你的情绪反应。\n\n如果准备好，请点击“下一页”开始。',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_nextbutton_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_nextbutton_4', units : undefined, 
    image : 'img/img_button/3button.jpg', mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_16 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_16.mouseClock = new util.Clock();
  // Initialize components for Routine "ph2scales"
  ph2scalesClock = new util.Clock();
  slider_5 = new visual.Slider({
    win: psychoJS.window, name: 'slider_5',
    size: [1.0, 0.05], pos: [0, (- 0.1)], units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  image_18 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_18', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.15, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  image_45 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_45', units : undefined, 
    image : 'img/img_button/3button.jpg', mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse_19 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_19.mouseClock = new util.Clock();
  // Initialize components for Routine "PHASE3instr"
  PHASE3instrClock = new util.Clock();
  image_27 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_27', units : undefined, 
    image : 'img/img_instruction/PHASE3instr0928.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_34 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_34', units : undefined, 
    image : 'img/img_button/3button.jpg', mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_17 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_17.mouseClock = new util.Clock();
  // Initialize components for Routine "PHASE3instr_2"
  PHASE3instr_2Clock = new util.Clock();
  text_43 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_43',
    text: '',
    font: 'STSong',
    units: undefined, 
    pos: [0.2, (- 0.03)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_42',
    text: '',
    font: 'STSong',
    units: undefined, 
    pos: [(- 0.2), (- 0.03)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -1.0 
  });
  
  image_37 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_37', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.05], size : [1.2, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_38 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_38', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse_18 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_18.mouseClock = new util.Clock();
  image_43 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_43', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.2), 0.07], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  image_44 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_44', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.2, 0.07], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "PHASE3intr_3"
  PHASE3intr_3Clock = new util.Clock();
  image_48 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_48', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.05], size : [1.2, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_49 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_49', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_50 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_50', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.2), 0.16], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_51 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_51', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.2, 0.16], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_44',
    text: '',
    font: 'STSong',
    units: undefined, 
    pos: [0.2, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_45 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_45',
    text: '',
    font: 'STSong',
    units: undefined, 
    pos: [(- 0.2), 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -5.0 
  });
  
  mouse_21 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_21.mouseClock = new util.Clock();
  // Initialize components for Routine "ph3_prequestion"
  ph3_prequestionClock = new util.Clock();
  image_53 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_53', units : undefined, 
    image : 'img/img_instruction/PHASE3question.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_54 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_54', units : undefined, 
    image : 'img/img_button/3button.jpg', mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.4)], size : [0.12, 0.07],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_23 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_23.mouseClock = new util.Clock();
  // Initialize components for Routine "Ph3"
  Ph3Clock = new util.Clock();
  day_num1 = "";
  day_num2 = "";
  list_pic1 = ["img/img_person/py1.png", "img/img_person/py2.png", "img/img_person/py3.png", "img/img_person/py4.png", "img/img_person/py5.png", "img/img_person/py6.png", "img/img_person/py7.png", "img/img_person/py8.png", "img/img_person/py9.png", "img/img_person/py10.png"];
  list_pic2 = ["img/img_person/py11.png", "img/img_person/py12.png", "img/img_person/py13.png", "img/img_person/py14.png", "img/img_person/py15.png", "img/img_person/py16.png", "img/img_person/py17.png", "img/img_person/py18.png", "img/img_person/py19.png", "img/img_person/py20.png"];
  util.shuffle(list_pic1);
  util.shuffle(list_pic2);
  temp_1 = 0;
  temp_2 = 0;
  temp_day1 = 0;
  temp_day2 = 0;
  list_pic = [];
  list_pic_days = [];
  cnt = 0;
  
  image_ph3instr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_ph3instr', units : undefined, 
    image : 'img/img_instruction/ph3instr.png', mask : undefined,
    ori : 0.0, pos : [0, 0.1], size : [1.2, 0.8],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_19 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_19', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.2), 0], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_21 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_21', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.2, 0], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '',
    font: 'STSong',
    units: undefined, 
    pos: [(- 0.2), (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: '',
    font: 'STSong',
    units: undefined, 
    pos: [0.2, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -5.0 
  });
  
  mouse_10 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_10.mouseClock = new util.Clock();
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "stop"
  stopClock = new util.Clock();
  text_stop = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_stop',
    text: '请休息5分钟，再继续下一部分的实验',
    font: 'STSong',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials_5;
var currentLoop;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond/myself_cond0914.xlsx',
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_5.forEach(function() {
      const snapshot = trials_5.getSnapshot();
    
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(introRoutineBegin(snapshot));
      trials_5LoopScheduler.add(introRoutineEachFrame());
      trials_5LoopScheduler.add(introRoutineEnd());
      trials_5LoopScheduler.add(endLoopIteration(trials_5LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_5LoopEnd() {
  psychoJS.experiment.removeLoop(trials_5);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond/cond0901.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(logotest_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(logotest_1RoutineEachFrame());
      trialsLoopScheduler.add(logotest_1RoutineEnd());
      const trials_7LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_7LoopBegin(trials_7LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_7LoopScheduler);
      trialsLoopScheduler.add(trials_7LoopEnd);
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_7;
function trials_7LoopBegin(trials_7LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_7 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: timescountdown, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_7'
    });
    psychoJS.experiment.addLoop(trials_7); // add the loop to the experiment
    currentLoop = trials_7;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_7.forEach(function() {
      const snapshot = trials_7.getSnapshot();
    
      trials_7LoopScheduler.add(importConditions(snapshot));
      trials_7LoopScheduler.add(logotest_2RoutineBegin(snapshot));
      trials_7LoopScheduler.add(logotest_2RoutineEachFrame());
      trials_7LoopScheduler.add(logotest_2RoutineEnd());
      trials_7LoopScheduler.add(endLoopIteration(trials_7LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_7LoopEnd() {
  psychoJS.experiment.removeLoop(trials_7);

  return Scheduler.Event.NEXT;
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trials_9;
function trials_9LoopBegin(trials_9LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_9 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond/PHASE2intropre.xlsx',
      seed: undefined, name: 'trials_9'
    });
    psychoJS.experiment.addLoop(trials_9); // add the loop to the experiment
    currentLoop = trials_9;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_9.forEach(function() {
      const snapshot = trials_9.getSnapshot();
    
      trials_9LoopScheduler.add(importConditions(snapshot));
      trials_9LoopScheduler.add(PHASE2introRoutineBegin(snapshot));
      trials_9LoopScheduler.add(PHASE2introRoutineEachFrame());
      trials_9LoopScheduler.add(PHASE2introRoutineEnd());
      trials_9LoopScheduler.add(endLoopIteration(trials_9LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_9LoopEnd() {
  psychoJS.experiment.removeLoop(trials_9);

  return Scheduler.Event.NEXT;
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      const snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(ph2matchRoutineBegin(snapshot));
      trials_3LoopScheduler.add(ph2matchRoutineEachFrame());
      trials_3LoopScheduler.add(ph2matchRoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


var trials_10;
function trials_10LoopBegin(trials_10LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_10 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond/ph2v2pre_cond.xlsx',
      seed: undefined, name: 'trials_10'
    });
    psychoJS.experiment.addLoop(trials_10); // add the loop to the experiment
    currentLoop = trials_10;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_10.forEach(function() {
      const snapshot = trials_10.getSnapshot();
    
      trials_10LoopScheduler.add(importConditions(snapshot));
      trials_10LoopScheduler.add(ph2v2test_codeRoutineBegin(snapshot));
      trials_10LoopScheduler.add(ph2v2test_codeRoutineEachFrame());
      trials_10LoopScheduler.add(ph2v2test_codeRoutineEnd());
      trials_10LoopScheduler.add(ph2v2testpreRoutineBegin(snapshot));
      trials_10LoopScheduler.add(ph2v2testpreRoutineEachFrame());
      trials_10LoopScheduler.add(ph2v2testpreRoutineEnd());
      trials_10LoopScheduler.add(endLoopIteration(trials_10LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_10LoopEnd() {
  psychoJS.experiment.removeLoop(trials_10);

  return Scheduler.Event.NEXT;
}


var trials_6;
function trials_6LoopBegin(trials_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond/ph2_stimuli_cond.xlsx',
      seed: undefined, name: 'trials_6'
    });
    psychoJS.experiment.addLoop(trials_6); // add the loop to the experiment
    currentLoop = trials_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_6.forEach(function() {
      const snapshot = trials_6.getSnapshot();
    
      trials_6LoopScheduler.add(importConditions(snapshot));
      trials_6LoopScheduler.add(time_down_numRoutineBegin(snapshot));
      trials_6LoopScheduler.add(time_down_numRoutineEachFrame());
      trials_6LoopScheduler.add(time_down_numRoutineEnd());
      const trials_8LoopScheduler = new Scheduler(psychoJS);
      trials_6LoopScheduler.add(trials_8LoopBegin(trials_8LoopScheduler, snapshot));
      trials_6LoopScheduler.add(trials_8LoopScheduler);
      trials_6LoopScheduler.add(trials_8LoopEnd);
      trials_6LoopScheduler.add(ph2v2test_1RoutineBegin(snapshot));
      trials_6LoopScheduler.add(ph2v2test_1RoutineEachFrame());
      trials_6LoopScheduler.add(ph2v2test_1RoutineEnd());
      trials_6LoopScheduler.add(endLoopIteration(trials_6LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_8;
function trials_8LoopBegin(trials_8LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_8 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: time_dw, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_8'
    });
    psychoJS.experiment.addLoop(trials_8); // add the loop to the experiment
    currentLoop = trials_8;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_8.forEach(function() {
      const snapshot = trials_8.getSnapshot();
    
      trials_8LoopScheduler.add(importConditions(snapshot));
      trials_8LoopScheduler.add(ph2v2testRoutineBegin(snapshot));
      trials_8LoopScheduler.add(ph2v2testRoutineEachFrame());
      trials_8LoopScheduler.add(ph2v2testRoutineEnd());
      trials_8LoopScheduler.add(endLoopIteration(trials_8LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_8LoopEnd() {
  psychoJS.experiment.removeLoop(trials_8);

  return Scheduler.Event.NEXT;
}


async function trials_6LoopEnd() {
  psychoJS.experiment.removeLoop(trials_6);

  return Scheduler.Event.NEXT;
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond/ph2scales.xlsx',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      const snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(ph2scalesRoutineBegin(snapshot));
      trials_4LoopScheduler.add(ph2scalesRoutineEachFrame());
      trials_4LoopScheduler.add(ph2scalesRoutineEnd());
      trials_4LoopScheduler.add(endLoopIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}


var trials_12;
function trials_12LoopBegin(trials_12LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_12 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond/PHASE3intro_2_cond.xlsx',
      seed: undefined, name: 'trials_12'
    });
    psychoJS.experiment.addLoop(trials_12); // add the loop to the experiment
    currentLoop = trials_12;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_12.forEach(function() {
      const snapshot = trials_12.getSnapshot();
    
      trials_12LoopScheduler.add(importConditions(snapshot));
      trials_12LoopScheduler.add(PHASE3instr_2RoutineBegin(snapshot));
      trials_12LoopScheduler.add(PHASE3instr_2RoutineEachFrame());
      trials_12LoopScheduler.add(PHASE3instr_2RoutineEnd());
      trials_12LoopScheduler.add(endLoopIteration(trials_12LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_12LoopEnd() {
  psychoJS.experiment.removeLoop(trials_12);

  return Scheduler.Event.NEXT;
}


var trials_14;
function trials_14LoopBegin(trials_14LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_14 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond/PHASE3intro_3_cond.xlsx',
      seed: undefined, name: 'trials_14'
    });
    psychoJS.experiment.addLoop(trials_14); // add the loop to the experiment
    currentLoop = trials_14;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_14.forEach(function() {
      const snapshot = trials_14.getSnapshot();
    
      trials_14LoopScheduler.add(importConditions(snapshot));
      trials_14LoopScheduler.add(PHASE3intr_3RoutineBegin(snapshot));
      trials_14LoopScheduler.add(PHASE3intr_3RoutineEachFrame());
      trials_14LoopScheduler.add(PHASE3intr_3RoutineEnd());
      trials_14LoopScheduler.add(endLoopIteration(trials_14LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_14LoopEnd() {
  psychoJS.experiment.removeLoop(trials_14);

  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond/TD_cond0922.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      const snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(Ph3RoutineBegin(snapshot));
      trials_2LoopScheduler.add(Ph3RoutineEachFrame());
      trials_2LoopScheduler.add(Ph3RoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'intro'-------
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((list_10[0] === 1)) {
        myself_img = myself_1;
    }
    if ((list_10[0] === 2)) {
        myself_img = myself_2;
    }
    if ((list_10[0] === 3)) {
        myself_img = myself_3;
    }
    if ((list_10[0] === 4)) {
        myself_img = myself_4;
    }
    if ((list_10[0] === 5)) {
        myself_img = myself_5;
    }
    if ((list_10[0] === 6)) {
        myself_img = myself_6;
    }
    if ((list_10[0] === 7)) {
        myself_img = myself_7;
    }
    if ((list_10[0] === 8)) {
        myself_img = myself_8;
    }
    if ((list_10[8] === 9)) {
        myself_img = myself_9;
    }
    if ((list_10[0] === 10)) {
        myself_img = myself_10;
    }
    if ((list_10[0] === 11)) {
        myself_img = myself_11;
    }
    if ((list_10[0] === 12)) {
        myself_img = myself_12;
    }
    if ((list_10[0] === 13)) {
        myself_img = myself_13;
    }
    if ((list_10[0] === 14)) {
        myself_img = myself_14;
    }
    if ((list_10[0] === 15)) {
        myself_img = myself_15;
    }
    if ((list_10[0] === 16)) {
        myself_img = myself_16;
    }
    if ((list_10[0] === 17)) {
        myself_img = myself_17;
    }
    if ((list_10[0] === 18)) {
        myself_img = myself_18;
    }
    if ((list_10[0] === 19)) {
        myself_img = myself_19;
    }
    if ((list_10[0] === 20)) {
        myself_img = myself_20;
    }
    
    image_myself.setImage(myself_img);
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(image_myself);
    introComponents.push(image_nextbutton);
    introComponents.push(mouse_3);
    introComponents.push(image_40);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function introRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'intro'-------
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_myself* updates
    if (t >= 0.0 && image_myself.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_myself.tStart = t;  // (not accounting for frame time here)
      image_myself.frameNStart = frameN;  // exact frame index
      
      image_myself.setAutoDraw(true);
    }

    
    // *image_nextbutton* updates
    if (t >= 0.0 && image_nextbutton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_nextbutton.tStart = t;  // (not accounting for frame time here)
      image_nextbutton.frameNStart = frameN;  // exact frame index
      
      image_nextbutton.setAutoDraw(true);
    }

    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_nextbutton]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *image_40* updates
    if (t >= 0.0 && image_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_40.tStart = t;  // (not accounting for frame time here)
      image_40.frameNStart = frameN;  // exact frame index
      
      image_40.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function introRoutineEnd() {
  return async function () {
    //------Ending Routine 'intro'-------
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_3.getPos();
    _mouseButtons = mouse_3.getPressed();
    psychoJS.experiment.addData('mouse_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_3.rightButton', _mouseButtons[2]);
    if (mouse_3.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0]);}
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var logotestintroComponents;
function logotestintroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'logotestintro'-------
    t = 0;
    logotestintroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_14
    mouse_14.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    logotestintroComponents = [];
    logotestintroComponents.push(image_24);
    logotestintroComponents.push(image_nextbutton_2);
    logotestintroComponents.push(mouse_14);
    
    logotestintroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function logotestintroRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'logotestintro'-------
    // get current time
    t = logotestintroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_24* updates
    if (t >= 0.0 && image_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_24.tStart = t;  // (not accounting for frame time here)
      image_24.frameNStart = frameN;  // exact frame index
      
      image_24.setAutoDraw(true);
    }

    
    // *image_nextbutton_2* updates
    if (t >= 0.0 && image_nextbutton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_nextbutton_2.tStart = t;  // (not accounting for frame time here)
      image_nextbutton_2.frameNStart = frameN;  // exact frame index
      
      image_nextbutton_2.setAutoDraw(true);
    }

    // *mouse_14* updates
    if (t >= 0.0 && mouse_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_14.tStart = t;  // (not accounting for frame time here)
      mouse_14.frameNStart = frameN;  // exact frame index
      
      mouse_14.status = PsychoJS.Status.STARTED;
      mouse_14.mouseClock.reset();
      prevButtonState = mouse_14.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_14.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_14.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_nextbutton_2]) {
            if (obj.contains(mouse_14)) {
              gotValidClick = true;
              mouse_14.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    logotestintroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function logotestintroRoutineEnd() {
  return async function () {
    //------Ending Routine 'logotestintro'-------
    logotestintroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_14.getPos();
    _mouseButtons = mouse_14.getPressed();
    psychoJS.experiment.addData('mouse_14.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_14.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_14.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_14.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_14.rightButton', _mouseButtons[2]);
    if (mouse_14.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_14.clicked_name', mouse_14.clicked_name[0]);}
    // the Routine "logotestintro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var list_loc_1;
var logotest_1Components;
function logotest_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'logotest_1'-------
    t = 0;
    logotest_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    list_loc_1 = [(- 0.45), (- 0.15), 0.15, 0.45];
    util.shuffle(list_1);
    util.shuffle(list_2);
    util.shuffle(list_3);
    util.shuffle(list_loc_1);
    loc_x_1 = list_loc_1[0];
    loc_x_2 = list_loc_1[1];
    loc_x_3 = list_loc_1[2];
    loc_x_4 = list_loc_1[3];
    if ((list_10[0] === 1)) {
        pic_4 = myself_1;
    }
    if ((list_10[0] === 2)) {
        pic_4 = myself_2;
    }
    if ((list_10[0] === 3)) {
        pic_4 = myself_3;
    }
    if ((list_10[0] === 4)) {
        pic_4 = myself_4;
    }
    if ((list_10[0] === 5)) {
        pic_4 = myself_5;
    }
    if ((list_10[0] === 6)) {
        pic_4 = myself_6;
    }
    if ((list_10[0] === 7)) {
        pic_4 = myself_7;
    }
    if ((list_10[0] === 8)) {
        pic_4 = myself_8;
    }
    if ((list_10[0] === 9)) {
        pic_4 = myself_9;
    }
    if ((list_10[0] === 10)) {
        pic_4 = myself_10;
    }
    if ((list_10[0] === 11)) {
        pic_4 = myself_11;
    }
    if ((list_10[0] === 12)) {
        pic_4 = myself_12;
    }
    if ((list_10[0] === 13)) {
        pic_4 = myself_13;
    }
    if ((list_10[0] === 14)) {
        pic_4 = myself_14;
    }
    if ((list_10[0] === 15)) {
        pic_4 = myself_15;
    }
    if ((list_10[0] === 16)) {
        pic_4 = myself_16;
    }
    if ((list_10[0] === 17)) {
        pic_4 = myself_17;
    }
    if ((list_10[0] === 18)) {
        pic_4 = myself_18;
    }
    if ((list_10[0] === 19)) {
        pic_4 = myself_19;
    }
    if ((list_10[0] === 20)) {
        pic_4 = myself_20;
    }
    if ((list_1[0] === 1)) {
        pic_1 = PIC_A;
    }
    if ((list_1[0] === 2)) {
        pic_1 = PIC_B;
    }
    if ((list_1[0] === 3)) {
        pic_1 = PIC_C;
    }
    if ((list_2[0] === 1)) {
        pic_2 = PIC_D;
    }
    if ((list_2[0] === 2)) {
        pic_2 = PIC_E;
    }
    if ((list_2[0] === 3)) {
        pic_2 = PIC_F;
    }
    if ((list_3[0] === 1)) {
        pic_3 = PIC_G;
    }
    if ((list_3[0] === 2)) {
        pic_3 = PIC_H;
    }
    if ((list_3[0] === 3)) {
        pic_3 = PIC_I;
    }
    
    img_1.setPos([loc_x_1, 0]);
    img_1.setImage(pic_1);
    img_2.setPos([loc_x_2, 0]);
    img_2.setImage(pic_2);
    img_3.setPos([loc_x_3, 0]);
    img_3.setImage(pic_3);
    img_4.setPos([loc_x_4, 0]);
    img_4.setImage(pic_4);
    // setup some python lists for storing info about the mouse_12
    mouse_12.clicked_name = [];
    gotValidClick = false; // until a click is received
    if ((list_10[0] === 1)) {
        pic_5 = myself_1;
    }
    if ((list_10[0] === 2)) {
        pic_5 = myself_2;
    }
    if ((list_10[0] === 3)) {
        pic_5 = myself_3;
    }
    if ((list_10[0] === 4)) {
        pic_5 = myself_4;
    }
    if ((list_10[0] === 5)) {
        pic_5 = myself_5;
    }
    if ((list_10[0] === 6)) {
        pic_5 = myself_6;
    }
    if ((list_10[0] === 7)) {
        pic_5 = myself_7;
    }
    if ((list_10[0] === 8)) {
        pic_5 = myself_8;
    }
    if ((list_10[0] === 9)) {
        pic_5 = myself_9;
    }
    if ((list_10[0] === 10)) {
        pic_5 = myself_10;
    }
    if ((list_10[0] === 11)) {
        pic_5 = myself_11;
    }
    if ((list_10[0] === 12)) {
        pic_5 = myself_12;
    }
    if ((list_10[0] === 13)) {
        pic_5 = myself_13;
    }
    if ((list_10[0] === 14)) {
        pic_5 = myself_14;
    }
    if ((list_10[0] === 15)) {
        pic_5 = myself_15;
    }
    if ((list_10[0] === 16)) {
        pic_5 = myself_16;
    }
    if ((list_10[0] === 17)) {
        pic_5 = myself_17;
    }
    if ((list_10[0] === 18)) {
        pic_5 = myself_18;
    }
    if ((list_10[0] === 19)) {
        pic_5 = myself_19;
    }
    if ((list_10[0] === 20)) {
        pic_5 = myself_20;
    }
    
    // keep track of which components have finished
    logotest_1Components = [];
    logotest_1Components.push(img_1);
    logotest_1Components.push(img_2);
    logotest_1Components.push(img_3);
    logotest_1Components.push(img_4);
    logotest_1Components.push(mouse_12);
    logotest_1Components.push(image_41);
    
    logotest_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function logotest_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'logotest_1'-------
    // get current time
    t = logotest_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *img_1* updates
    if (t >= 0.0 && img_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_1.tStart = t;  // (not accounting for frame time here)
      img_1.frameNStart = frameN;  // exact frame index
      
      img_1.setAutoDraw(true);
    }

    
    // *img_2* updates
    if (t >= 0.0 && img_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_2.tStart = t;  // (not accounting for frame time here)
      img_2.frameNStart = frameN;  // exact frame index
      
      img_2.setAutoDraw(true);
    }

    
    // *img_3* updates
    if (t >= 0.0 && img_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_3.tStart = t;  // (not accounting for frame time here)
      img_3.frameNStart = frameN;  // exact frame index
      
      img_3.setAutoDraw(true);
    }

    
    // *img_4* updates
    if (t >= 0.0 && img_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_4.tStart = t;  // (not accounting for frame time here)
      img_4.frameNStart = frameN;  // exact frame index
      
      img_4.setAutoDraw(true);
    }

    // *mouse_12* updates
    if (t >= 0.0 && mouse_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_12.tStart = t;  // (not accounting for frame time here)
      mouse_12.frameNStart = frameN;  // exact frame index
      
      mouse_12.status = PsychoJS.Status.STARTED;
      mouse_12.mouseClock.reset();
      prevButtonState = mouse_12.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_12.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_12.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_1,img_2,img_3,img_4]) {
            if (obj.contains(mouse_12)) {
              gotValidClick = true;
              mouse_12.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *image_41* updates
    if (t >= 0.0 && image_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_41.tStart = t;  // (not accounting for frame time here)
      image_41.frameNStart = frameN;  // exact frame index
      
      image_41.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    logotest_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function logotest_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'logotest_1'-------
    logotest_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (mouse_12.isPressedIn(img_4)) {
        timescountdown = 1;
        pic_show = PIC_right;
        m = (m + 1);
        if ((m >= 3)) {
            pic_show = PIC_pass;
            timescountdown = 3;
            trials.finished = true;
        }
    } else {
        pic_show = PIC_wrong;
        timescountdown = 5;
        m = 0;
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_12.getPos();
    _mouseButtons = mouse_12.getPressed();
    psychoJS.experiment.addData('mouse_12.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_12.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_12.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_12.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_12.rightButton', _mouseButtons[2]);
    if (mouse_12.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_12.clicked_name', mouse_12.clicked_name[0]);}
    if (mouse_12.isPressedIn(img_4)) {
        pic_logo = blank;
    } else {
        pic_logo = pic_5;
    }
    
    // the Routine "logotest_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var logotest_2Components;
function logotest_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'logotest_2'-------
    t = 0;
    logotest_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    image_25.setImage(pic_show);
    image_28.setImage(pic_logo);
    // keep track of which components have finished
    logotest_2Components = [];
    logotest_2Components.push(image_25);
    logotest_2Components.push(image_28);
    
    logotest_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function logotest_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'logotest_2'-------
    // get current time
    t = logotest_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_25* updates
    if (t >= 0.0 && image_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_25.tStart = t;  // (not accounting for frame time here)
      image_25.frameNStart = frameN;  // exact frame index
      
      image_25.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_25.setAutoDraw(false);
    }
    
    // *image_28* updates
    if (t >= 0.0 && image_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_28.tStart = t;  // (not accounting for frame time here)
      image_28.frameNStart = frameN;  // exact frame index
      
      image_28.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_28.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_28.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    logotest_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function logotest_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'logotest_2'-------
    logotest_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    timescountdown -= 0;
    
    return Scheduler.Event.NEXT;
  };
}


var PHASE2introComponents;
function PHASE2introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PHASE2intro'-------
    t = 0;
    PHASE2introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_26.setImage(ph2intropre);
    // setup some python lists for storing info about the mouse_15
    mouse_15.clicked_name = [];
    gotValidClick = false; // until a click is received
    image_nextbutton_3.setImage(button);
    image_39.setImage(ph2intro_img);
    // keep track of which components have finished
    PHASE2introComponents = [];
    PHASE2introComponents.push(image_26);
    PHASE2introComponents.push(mouse_15);
    PHASE2introComponents.push(image_nextbutton_3);
    PHASE2introComponents.push(image_39);
    
    PHASE2introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PHASE2introRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PHASE2intro'-------
    // get current time
    t = PHASE2introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_26* updates
    if (t >= 0.0 && image_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_26.tStart = t;  // (not accounting for frame time here)
      image_26.frameNStart = frameN;  // exact frame index
      
      image_26.setAutoDraw(true);
    }

    // *mouse_15* updates
    if (t >= 0.0 && mouse_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_15.tStart = t;  // (not accounting for frame time here)
      mouse_15.frameNStart = frameN;  // exact frame index
      
      mouse_15.status = PsychoJS.Status.STARTED;
      mouse_15.mouseClock.reset();
      prevButtonState = mouse_15.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_15.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_15.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_nextbutton_3]) {
            if (obj.contains(mouse_15)) {
              gotValidClick = true;
              mouse_15.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *image_nextbutton_3* updates
    if (t >= 0.0 && image_nextbutton_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_nextbutton_3.tStart = t;  // (not accounting for frame time here)
      image_nextbutton_3.frameNStart = frameN;  // exact frame index
      
      image_nextbutton_3.setAutoDraw(true);
    }

    
    // *image_39* updates
    if (t >= 0.0 && image_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_39.tStart = t;  // (not accounting for frame time here)
      image_39.frameNStart = frameN;  // exact frame index
      
      image_39.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PHASE2introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PHASE2introRoutineEnd() {
  return async function () {
    //------Ending Routine 'PHASE2intro'-------
    PHASE2introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_15.getPos();
    _mouseButtons = mouse_15.getPressed();
    psychoJS.experiment.addData('mouse_15.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_15.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_15.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_15.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_15.rightButton', _mouseButtons[2]);
    if (mouse_15.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_15.clicked_name', mouse_15.clicked_name[0]);}
    // the Routine "PHASE2intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var PHASE2intro_roleComponents;
function PHASE2intro_roleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PHASE2intro_role'-------
    t = 0;
    PHASE2intro_roleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_22
    mouse_22.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PHASE2intro_roleComponents = [];
    PHASE2intro_roleComponents.push(text_46);
    PHASE2intro_roleComponents.push(text_47);
    PHASE2intro_roleComponents.push(mouse_22);
    PHASE2intro_roleComponents.push(image_52);
    
    PHASE2intro_roleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PHASE2intro_roleRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PHASE2intro_role'-------
    // get current time
    t = PHASE2intro_roleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_46* updates
    if (t >= 0.0 && text_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_46.tStart = t;  // (not accounting for frame time here)
      text_46.frameNStart = frameN;  // exact frame index
      
      text_46.setAutoDraw(true);
    }

    
    // *text_47* updates
    if (t >= 0 && text_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_47.tStart = t;  // (not accounting for frame time here)
      text_47.frameNStart = frameN;  // exact frame index
      
      text_47.setAutoDraw(true);
    }

    // *mouse_22* updates
    if (t >= 0 && mouse_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_22.tStart = t;  // (not accounting for frame time here)
      mouse_22.frameNStart = frameN;  // exact frame index
      
      mouse_22.status = PsychoJS.Status.STARTED;
      mouse_22.mouseClock.reset();
      prevButtonState = mouse_22.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_22.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_22.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_52]) {
            if (obj.contains(mouse_22)) {
              gotValidClick = true;
              mouse_22.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *image_52* updates
    if (t >= 0 && image_52.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_52.tStart = t;  // (not accounting for frame time here)
      image_52.frameNStart = frameN;  // exact frame index
      
      image_52.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PHASE2intro_roleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PHASE2intro_roleRoutineEnd() {
  return async function () {
    //------Ending Routine 'PHASE2intro_role'-------
    PHASE2intro_roleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_22.getPos();
    _mouseButtons = mouse_22.getPressed();
    psychoJS.experiment.addData('mouse_22.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_22.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_22.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_22.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_22.rightButton', _mouseButtons[2]);
    if (mouse_22.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_22.clicked_name', mouse_22.clicked_name[0]);}
    // the Routine "PHASE2intro_role" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ph2matchComponents;
function ph2matchRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ph2match'-------
    t = 0;
    ph2matchClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.050000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ph2matchComponents = [];
    ph2matchComponents.push(text_29);
    ph2matchComponents.push(text_30);
    ph2matchComponents.push(text_31);
    
    ph2matchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ph2matchRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ph2match'-------
    // get current time
    t = ph2matchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_29* updates
    if (t >= 0.0 && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_29.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_29.setAutoDraw(false);
    }
    
    // *text_30* updates
    if (t >= 2.05 && text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_30.tStart = t;  // (not accounting for frame time here)
      text_30.frameNStart = frameN;  // exact frame index
      
      text_30.setAutoDraw(true);
    }

    frameRemains = 2.05 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_30.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_30.setAutoDraw(false);
    }
    
    // *text_31* updates
    if (t >= 4.05 && text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_31.tStart = t;  // (not accounting for frame time here)
      text_31.frameNStart = frameN;  // exact frame index
      
      text_31.setAutoDraw(true);
    }

    frameRemains = 4.05 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_31.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_31.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ph2matchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ph2matchRoutineEnd() {
  return async function () {
    //------Ending Routine 'ph2match'-------
    ph2matchComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var ph2v2test_codeComponents;
function ph2v2test_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ph2v2test_code'-------
    t = 0;
    ph2v2test_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((list_11[0] === 1)) {
        student_IMG = student_1;
    }
    if ((list_11[0] === 2)) {
        student_IMG = student_2;
    }
    if ((list_11[0] === 3)) {
        student_IMG = student_3;
    }
    if ((list_11[0] === 4)) {
        student_IMG = student_4;
    }
    if ((list_11[0] === 5)) {
        student_IMG = student_5;
    }
    if ((list_11[0] === 6)) {
        student_IMG = student_6;
    }
    if ((list_11[0] === 7)) {
        student_IMG = student_7;
    }
    if ((list_11[0] === 8)) {
        student_IMG = student_8;
    }
    if ((list_11[8] === 9)) {
        student_IMG = student_9;
    }
    if ((list_11[0] === 10)) {
        student_IMG = student_10;
    }
    if ((list_11[0] === 11)) {
        student_IMG = student_11;
    }
    if ((list_11[0] === 12)) {
        student_IMG = student_12;
    }
    if ((list_11[0] === 13)) {
        student_IMG = student_13;
    }
    if ((list_11[0] === 14)) {
        student_IMG = student_14;
    }
    if ((list_11[0] === 15)) {
        student_IMG = student_15;
    }
    if ((list_11[0] === 16)) {
        student_IMG = student_16;
    }
    if ((list_11[0] === 17)) {
        student_IMG = student_17;
    }
    if ((list_11[0] === 18)) {
        student_IMG = student_18;
    }
    if ((list_11[0] === 19)) {
        student_IMG = student_19;
    }
    if ((list_11[0] === 20)) {
        student_IMG = student_20;
    }
    timedown = ("\u5012\u8ba1\u65f6" + time_dw.toString());
    
    // keep track of which components have finished
    ph2v2test_codeComponents = [];
    
    ph2v2test_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ph2v2test_codeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ph2v2test_code'-------
    // get current time
    t = ph2v2test_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ph2v2test_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ph2v2test_codeRoutineEnd() {
  return async function () {
    //------Ending Routine 'ph2v2test_code'-------
    ph2v2test_codeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "ph2v2test_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ph2v2testpreComponents;
function ph2v2testpreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ph2v2testpre'-------
    t = 0;
    ph2v2testpreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    image_42.setImage(student_IMG);
    // keep track of which components have finished
    ph2v2testpreComponents = [];
    ph2v2testpreComponents.push(image_42);
    ph2v2testpreComponents.push(text_23);
    
    ph2v2testpreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ph2v2testpreRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ph2v2testpre'-------
    // get current time
    t = ph2v2testpreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_42* updates
    if (t >= 0 && image_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_42.tStart = t;  // (not accounting for frame time here)
      image_42.frameNStart = frameN;  // exact frame index
      
      image_42.setAutoDraw(true);
    }

    frameRemains = 0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_42.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_42.setAutoDraw(false);
    }
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_23.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ph2v2testpreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ph2v2testpreRoutineEnd() {
  return async function () {
    //------Ending Routine 'ph2v2testpre'-------
    ph2v2testpreComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var time_down_numComponents;
function time_down_numRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'time_down_num'-------
    t = 0;
    time_down_numClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    util.shuffle(list_timedown);
    time_dw = list_timedown[0];
    
    // keep track of which components have finished
    time_down_numComponents = [];
    
    time_down_numComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function time_down_numRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'time_down_num'-------
    // get current time
    t = time_down_numClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    time_down_numComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function time_down_numRoutineEnd() {
  return async function () {
    //------Ending Routine 'time_down_num'-------
    time_down_numComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "time_down_num" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ph2v2testComponents;
function ph2v2testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ph2v2test'-------
    t = 0;
    ph2v2testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.500000);
    // update component parameters for each repeat
    image_29.setImage(student_IMG);
    image_30.setImage(ph2_stimuli);
    // keep track of which components have finished
    ph2v2testComponents = [];
    ph2v2testComponents.push(image_29);
    ph2v2testComponents.push(text_27);
    ph2v2testComponents.push(text_24);
    ph2v2testComponents.push(text_26);
    ph2v2testComponents.push(image_30);
    
    ph2v2testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ph2v2testRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ph2v2test'-------
    // get current time
    t = ph2v2testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_29* updates
    if (t >= 0 && image_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_29.tStart = t;  // (not accounting for frame time here)
      image_29.frameNStart = frameN;  // exact frame index
      
      image_29.setAutoDraw(true);
    }

    frameRemains = 0 + 4.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_29.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_29.setAutoDraw(false);
    }
    
    // *text_27* updates
    if (t >= 0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }

    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_27.setAutoDraw(false);
    }
    
    // *text_24* updates
    if (t >= 1.5 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }

    frameRemains = 1.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_24.setAutoDraw(false);
    }
    
    // *text_26* updates
    if (t >= 3 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }

    frameRemains = 3 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_26.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_26.setAutoDraw(false);
    }
    
    // *image_30* updates
    if (t >= 0 && image_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_30.tStart = t;  // (not accounting for frame time here)
      image_30.frameNStart = frameN;  // exact frame index
      
      image_30.setAutoDraw(true);
    }

    frameRemains = 0 + 4.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_30.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_30.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ph2v2testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ph2v2testRoutineEnd() {
  return async function () {
    //------Ending Routine 'ph2v2test'-------
    ph2v2testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    time_dw -= 1;
    
    return Scheduler.Event.NEXT;
  };
}


var money;
var ph2v2test_1Components;
function ph2v2test_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ph2v2test_1'-------
    t = 0;
    ph2v2test_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    startmoney = (startmoney + elec_intensity);
    money = (("\u51b3\u7b56\u8005\u7684\u9009\u62e9\u5982\u4e0b\u56fe\uff0c\u51b3\u7b56\u8005\u7d2f\u8ba1\u83b7\u5f97\u5956\u52b1" + startmoney.toString()) + "\u5143");
    
    image_31.setImage(student_IMG);
    image_32.setImage(ph2_stimuli_2);
    // setup some python lists for storing info about the mouse_13
    mouse_13.clicked_name = [];
    gotValidClick = false; // until a click is received
    text_32.setText(money);
    // keep track of which components have finished
    ph2v2test_1Components = [];
    ph2v2test_1Components.push(image_31);
    ph2v2test_1Components.push(image_32);
    ph2v2test_1Components.push(image_33);
    ph2v2test_1Components.push(mouse_13);
    ph2v2test_1Components.push(text_32);
    
    ph2v2test_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ph2v2test_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ph2v2test_1'-------
    // get current time
    t = ph2v2test_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_31* updates
    if (t >= 0 && image_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_31.tStart = t;  // (not accounting for frame time here)
      image_31.frameNStart = frameN;  // exact frame index
      
      image_31.setAutoDraw(true);
    }

    
    // *image_32* updates
    if (t >= 0 && image_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_32.tStart = t;  // (not accounting for frame time here)
      image_32.frameNStart = frameN;  // exact frame index
      
      image_32.setAutoDraw(true);
    }

    
    // *image_33* updates
    if (t >= 0 && image_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_33.tStart = t;  // (not accounting for frame time here)
      image_33.frameNStart = frameN;  // exact frame index
      
      image_33.setAutoDraw(true);
    }

    // *mouse_13* updates
    if (t >= 0 && mouse_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_13.tStart = t;  // (not accounting for frame time here)
      mouse_13.frameNStart = frameN;  // exact frame index
      
      mouse_13.status = PsychoJS.Status.STARTED;
      mouse_13.mouseClock.reset();
      prevButtonState = mouse_13.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_13.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_13.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_33]) {
            if (obj.contains(mouse_13)) {
              gotValidClick = true;
              mouse_13.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *text_32* updates
    if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_32.tStart = t;  // (not accounting for frame time here)
      text_32.frameNStart = frameN;  // exact frame index
      
      text_32.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ph2v2test_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ph2v2test_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'ph2v2test_1'-------
    ph2v2test_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_13.getPos();
    _mouseButtons = mouse_13.getPressed();
    psychoJS.experiment.addData('mouse_13.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_13.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_13.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_13.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_13.rightButton', _mouseButtons[2]);
    if (mouse_13.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_13.clicked_name', mouse_13.clicked_name[0]);}
    // the Routine "ph2v2test_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ph2scaleintroComponents;
function ph2scaleintroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ph2scaleintro'-------
    t = 0;
    ph2scaleintroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_16
    mouse_16.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ph2scaleintroComponents = [];
    ph2scaleintroComponents.push(text_21);
    ph2scaleintroComponents.push(image_nextbutton_4);
    ph2scaleintroComponents.push(mouse_16);
    
    ph2scaleintroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ph2scaleintroRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ph2scaleintro'-------
    // get current time
    t = ph2scaleintroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_21* updates
    if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }

    
    // *image_nextbutton_4* updates
    if (t >= 0.0 && image_nextbutton_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_nextbutton_4.tStart = t;  // (not accounting for frame time here)
      image_nextbutton_4.frameNStart = frameN;  // exact frame index
      
      image_nextbutton_4.setAutoDraw(true);
    }

    // *mouse_16* updates
    if (t >= 0.0 && mouse_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_16.tStart = t;  // (not accounting for frame time here)
      mouse_16.frameNStart = frameN;  // exact frame index
      
      mouse_16.status = PsychoJS.Status.STARTED;
      mouse_16.mouseClock.reset();
      prevButtonState = mouse_16.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_16.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_16.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_nextbutton_4]) {
            if (obj.contains(mouse_16)) {
              gotValidClick = true;
              mouse_16.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ph2scaleintroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ph2scaleintroRoutineEnd() {
  return async function () {
    //------Ending Routine 'ph2scaleintro'-------
    ph2scaleintroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_16.getPos();
    _mouseButtons = mouse_16.getPressed();
    psychoJS.experiment.addData('mouse_16.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_16.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_16.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_16.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_16.rightButton', _mouseButtons[2]);
    if (mouse_16.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_16.clicked_name', mouse_16.clicked_name[0]);}
    // the Routine "ph2scaleintro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ph2scalesComponents;
function ph2scalesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ph2scales'-------
    t = 0;
    ph2scalesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_5.reset()
    image_18.setImage(scales);
    // setup some python lists for storing info about the mouse_19
    mouse_19.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ph2scalesComponents = [];
    ph2scalesComponents.push(slider_5);
    ph2scalesComponents.push(image_18);
    ph2scalesComponents.push(text_20);
    ph2scalesComponents.push(image_45);
    ph2scalesComponents.push(mouse_19);
    
    ph2scalesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ph2scalesRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ph2scales'-------
    // get current time
    t = ph2scalesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_5* updates
    if (t >= 1 && slider_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_5.tStart = t;  // (not accounting for frame time here)
      slider_5.frameNStart = frameN;  // exact frame index
      
      slider_5.setAutoDraw(true);
    }

    
    // *image_18* updates
    if (t >= 1 && image_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_18.tStart = t;  // (not accounting for frame time here)
      image_18.frameNStart = frameN;  // exact frame index
      
      image_18.setAutoDraw(true);
    }

    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_20.setAutoDraw(false);
    }
    
    // *image_45* updates
    if (t >= 3 && image_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_45.tStart = t;  // (not accounting for frame time here)
      image_45.frameNStart = frameN;  // exact frame index
      
      image_45.setAutoDraw(true);
    }

    // *mouse_19* updates
    if (t >= 3 && mouse_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_19.tStart = t;  // (not accounting for frame time here)
      mouse_19.frameNStart = frameN;  // exact frame index
      
      mouse_19.status = PsychoJS.Status.STARTED;
      mouse_19.mouseClock.reset();
      prevButtonState = mouse_19.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_19.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_19.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_45]) {
            if (obj.contains(mouse_19)) {
              gotValidClick = true;
              mouse_19.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ph2scalesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ph2scalesRoutineEnd() {
  return async function () {
    //------Ending Routine 'ph2scales'-------
    ph2scalesComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_5.response', slider_5.getRating());
    psychoJS.experiment.addData('slider_5.rt', slider_5.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_19.getPos();
    _mouseButtons = mouse_19.getPressed();
    psychoJS.experiment.addData('mouse_19.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_19.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_19.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_19.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_19.rightButton', _mouseButtons[2]);
    if (mouse_19.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_19.clicked_name', mouse_19.clicked_name[0]);}
    // the Routine "ph2scales" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var PHASE3instrComponents;
function PHASE3instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PHASE3instr'-------
    t = 0;
    PHASE3instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_17
    mouse_17.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PHASE3instrComponents = [];
    PHASE3instrComponents.push(image_27);
    PHASE3instrComponents.push(image_34);
    PHASE3instrComponents.push(mouse_17);
    
    PHASE3instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PHASE3instrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PHASE3instr'-------
    // get current time
    t = PHASE3instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_27* updates
    if (t >= 0.0 && image_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_27.tStart = t;  // (not accounting for frame time here)
      image_27.frameNStart = frameN;  // exact frame index
      
      image_27.setAutoDraw(true);
    }

    
    // *image_34* updates
    if (t >= 0 && image_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_34.tStart = t;  // (not accounting for frame time here)
      image_34.frameNStart = frameN;  // exact frame index
      
      image_34.setAutoDraw(true);
    }

    // *mouse_17* updates
    if (t >= 0.0 && mouse_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_17.tStart = t;  // (not accounting for frame time here)
      mouse_17.frameNStart = frameN;  // exact frame index
      
      mouse_17.status = PsychoJS.Status.STARTED;
      mouse_17.mouseClock.reset();
      prevButtonState = mouse_17.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_17.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_17.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_34]) {
            if (obj.contains(mouse_17)) {
              gotValidClick = true;
              mouse_17.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PHASE3instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PHASE3instrRoutineEnd() {
  return async function () {
    //------Ending Routine 'PHASE3instr'-------
    PHASE3instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_17.getPos();
    _mouseButtons = mouse_17.getPressed();
    psychoJS.experiment.addData('mouse_17.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_17.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_17.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_17.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_17.rightButton', _mouseButtons[2]);
    if (mouse_17.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_17.clicked_name', mouse_17.clicked_name[0]);}
    // the Routine "PHASE3instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var PHASE3instr_2Components;
function PHASE3instr_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PHASE3instr_2'-------
    t = 0;
    PHASE3instr_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_43.setText(text_right);
    text_42.setText(text_left);
    image_37.setImage(ph3intro_2);
    image_38.setImage(button_ph3intro_2);
    // setup some python lists for storing info about the mouse_18
    mouse_18.clicked_name = [];
    gotValidClick = false; // until a click is received
    image_43.setImage(ph3intro_2_personleftimg);
    image_44.setImage(ph3intro_2_personrightimg);
    // keep track of which components have finished
    PHASE3instr_2Components = [];
    PHASE3instr_2Components.push(text_43);
    PHASE3instr_2Components.push(text_42);
    PHASE3instr_2Components.push(image_37);
    PHASE3instr_2Components.push(image_38);
    PHASE3instr_2Components.push(mouse_18);
    PHASE3instr_2Components.push(image_43);
    PHASE3instr_2Components.push(image_44);
    
    PHASE3instr_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PHASE3instr_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PHASE3instr_2'-------
    // get current time
    t = PHASE3instr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_43* updates
    if (t >= 0.0 && text_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_43.tStart = t;  // (not accounting for frame time here)
      text_43.frameNStart = frameN;  // exact frame index
      
      text_43.setAutoDraw(true);
    }

    
    // *text_42* updates
    if (t >= 0.0 && text_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_42.tStart = t;  // (not accounting for frame time here)
      text_42.frameNStart = frameN;  // exact frame index
      
      text_42.setAutoDraw(true);
    }

    
    // *image_37* updates
    if (t >= 0.0 && image_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_37.tStart = t;  // (not accounting for frame time here)
      image_37.frameNStart = frameN;  // exact frame index
      
      image_37.setAutoDraw(true);
    }

    
    // *image_38* updates
    if (t >= 0.0 && image_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_38.tStart = t;  // (not accounting for frame time here)
      image_38.frameNStart = frameN;  // exact frame index
      
      image_38.setAutoDraw(true);
    }

    // *mouse_18* updates
    if (t >= 0.0 && mouse_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_18.tStart = t;  // (not accounting for frame time here)
      mouse_18.frameNStart = frameN;  // exact frame index
      
      mouse_18.status = PsychoJS.Status.STARTED;
      mouse_18.mouseClock.reset();
      prevButtonState = mouse_18.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_18.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_18.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_38]) {
            if (obj.contains(mouse_18)) {
              gotValidClick = true;
              mouse_18.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *image_43* updates
    if (t >= 0.0 && image_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_43.tStart = t;  // (not accounting for frame time here)
      image_43.frameNStart = frameN;  // exact frame index
      
      image_43.setAutoDraw(true);
    }

    
    // *image_44* updates
    if (t >= 0.0 && image_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_44.tStart = t;  // (not accounting for frame time here)
      image_44.frameNStart = frameN;  // exact frame index
      
      image_44.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PHASE3instr_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PHASE3instr_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'PHASE3instr_2'-------
    PHASE3instr_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_18.getPos();
    _mouseButtons = mouse_18.getPressed();
    psychoJS.experiment.addData('mouse_18.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_18.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_18.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_18.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_18.rightButton', _mouseButtons[2]);
    if (mouse_18.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_18.clicked_name', mouse_18.clicked_name[0]);}
    // the Routine "PHASE3instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var PHASE3intr_3Components;
function PHASE3intr_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PHASE3intr_3'-------
    t = 0;
    PHASE3intr_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_48.setImage(ph3intro_3);
    image_49.setImage(button_ph3intro_3);
    image_50.setImage(ph3intro_3_personleftimg);
    image_51.setImage(ph3intro_3_personrightimg);
    text_44.setText(text_right_2);
    text_45.setText(text_left_2);
    // setup some python lists for storing info about the mouse_21
    mouse_21.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PHASE3intr_3Components = [];
    PHASE3intr_3Components.push(image_48);
    PHASE3intr_3Components.push(image_49);
    PHASE3intr_3Components.push(image_50);
    PHASE3intr_3Components.push(image_51);
    PHASE3intr_3Components.push(text_44);
    PHASE3intr_3Components.push(text_45);
    PHASE3intr_3Components.push(mouse_21);
    
    PHASE3intr_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PHASE3intr_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PHASE3intr_3'-------
    // get current time
    t = PHASE3intr_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_48* updates
    if (t >= 0.0 && image_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_48.tStart = t;  // (not accounting for frame time here)
      image_48.frameNStart = frameN;  // exact frame index
      
      image_48.setAutoDraw(true);
    }

    
    // *image_49* updates
    if (t >= 0.0 && image_49.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_49.tStart = t;  // (not accounting for frame time here)
      image_49.frameNStart = frameN;  // exact frame index
      
      image_49.setAutoDraw(true);
    }

    
    // *image_50* updates
    if (t >= 0.0 && image_50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_50.tStart = t;  // (not accounting for frame time here)
      image_50.frameNStart = frameN;  // exact frame index
      
      image_50.setAutoDraw(true);
    }

    
    // *image_51* updates
    if (t >= 0.0 && image_51.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_51.tStart = t;  // (not accounting for frame time here)
      image_51.frameNStart = frameN;  // exact frame index
      
      image_51.setAutoDraw(true);
    }

    
    // *text_44* updates
    if (t >= 0.0 && text_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_44.tStart = t;  // (not accounting for frame time here)
      text_44.frameNStart = frameN;  // exact frame index
      
      text_44.setAutoDraw(true);
    }

    
    // *text_45* updates
    if (t >= 0.0 && text_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_45.tStart = t;  // (not accounting for frame time here)
      text_45.frameNStart = frameN;  // exact frame index
      
      text_45.setAutoDraw(true);
    }

    // *mouse_21* updates
    if (t >= 0.0 && mouse_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_21.tStart = t;  // (not accounting for frame time here)
      mouse_21.frameNStart = frameN;  // exact frame index
      
      mouse_21.status = PsychoJS.Status.STARTED;
      mouse_21.mouseClock.reset();
      prevButtonState = mouse_21.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_21.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_21.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_49]) {
            if (obj.contains(mouse_21)) {
              gotValidClick = true;
              mouse_21.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PHASE3intr_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PHASE3intr_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'PHASE3intr_3'-------
    PHASE3intr_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_21.getPos();
    _mouseButtons = mouse_21.getPressed();
    psychoJS.experiment.addData('mouse_21.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_21.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_21.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_21.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_21.rightButton', _mouseButtons[2]);
    if (mouse_21.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_21.clicked_name', mouse_21.clicked_name[0]);}
    // the Routine "PHASE3intr_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ph3_prequestionComponents;
function ph3_prequestionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ph3_prequestion'-------
    t = 0;
    ph3_prequestionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_23
    mouse_23.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ph3_prequestionComponents = [];
    ph3_prequestionComponents.push(image_53);
    ph3_prequestionComponents.push(image_54);
    ph3_prequestionComponents.push(mouse_23);
    
    ph3_prequestionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ph3_prequestionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ph3_prequestion'-------
    // get current time
    t = ph3_prequestionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_53* updates
    if (t >= 0.0 && image_53.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_53.tStart = t;  // (not accounting for frame time here)
      image_53.frameNStart = frameN;  // exact frame index
      
      image_53.setAutoDraw(true);
    }

    
    // *image_54* updates
    if (t >= 0.0 && image_54.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_54.tStart = t;  // (not accounting for frame time here)
      image_54.frameNStart = frameN;  // exact frame index
      
      image_54.setAutoDraw(true);
    }

    // *mouse_23* updates
    if (t >= 0.0 && mouse_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_23.tStart = t;  // (not accounting for frame time here)
      mouse_23.frameNStart = frameN;  // exact frame index
      
      mouse_23.status = PsychoJS.Status.STARTED;
      mouse_23.mouseClock.reset();
      prevButtonState = mouse_23.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_23.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_23.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_54]) {
            if (obj.contains(mouse_23)) {
              gotValidClick = true;
              mouse_23.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ph3_prequestionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ph3_prequestionRoutineEnd() {
  return async function () {
    //------Ending Routine 'ph3_prequestion'-------
    ph3_prequestionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_23.getPos();
    _mouseButtons = mouse_23.getPressed();
    psychoJS.experiment.addData('mouse_23.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_23.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_23.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_23.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_23.rightButton', _mouseButtons[2]);
    if (mouse_23.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_23.clicked_name', mouse_23.clicked_name[0]);}
    // the Routine "ph3_prequestion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _pj;
var Ph3Components;
function Ph3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Ph3'-------
    t = 0;
    Ph3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((util.index(list_pic1, pic_loc1) !== util.index(list_pic2, pic_loc2))) {
        cnt += 1;
        if ((! _pj.in_es6(pic_loc1, list_pic))) {
            temp_day1 = (util.index(list_pic1, pic_loc1) + 1);
            list_pic.push(pic_loc1);
            list_pic_days.push(temp_day1);
        } else {
            temp_day1 = list_pic_days[util.index(list_pic, pic_loc1)];
        }
        if ((! _pj.in_es6(pic_loc2, list_pic))) {
            temp_day2 = (util.index(list_pic2, pic_loc2) + 1);
            list_pic.push(pic_loc2);
            list_pic_days.push(temp_day2);
        } else {
            temp_day2 = list_pic_days[util.index(list_pic, pic_loc2)];
        }
    } else {
        continueRoutine = false;
    }
    day_num1 = (temp_day1.toString() + "\u5468");
    day_num2 = (temp_day2.toString() + "\u5468");
    console.log(list_pic_days, "list_pic_days");
    
    image_19.setImage(pic_loc1);
    image_21.setImage(pic_loc2);
    text_16.setText(day_num1);
    text_17.setText(day_num2);
    // setup some python lists for storing info about the mouse_10
    // current position of the mouse:
    mouse_10.x = [];
    mouse_10.y = [];
    mouse_10.leftButton = [];
    mouse_10.midButton = [];
    mouse_10.rightButton = [];
    mouse_10.time = [];
    mouse_10.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Ph3Components = [];
    Ph3Components.push(image_ph3instr);
    Ph3Components.push(image_19);
    Ph3Components.push(image_21);
    Ph3Components.push(text_16);
    Ph3Components.push(text_17);
    Ph3Components.push(mouse_10);
    Ph3Components.push(text_22);
    
    Ph3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Ph3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Ph3'-------
    // get current time
    t = Ph3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_ph3instr* updates
    if (t >= 2.05 && image_ph3instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_ph3instr.tStart = t;  // (not accounting for frame time here)
      image_ph3instr.frameNStart = frameN;  // exact frame index
      
      image_ph3instr.setAutoDraw(true);
    }

    
    // *image_19* updates
    if (t >= 2.05 && image_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_19.tStart = t;  // (not accounting for frame time here)
      image_19.frameNStart = frameN;  // exact frame index
      
      image_19.setAutoDraw(true);
    }

    
    // *image_21* updates
    if (t >= 2.05 && image_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_21.tStart = t;  // (not accounting for frame time here)
      image_21.frameNStart = frameN;  // exact frame index
      
      image_21.setAutoDraw(true);
    }

    
    // *text_16* updates
    if (t >= 2.05 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }

    
    // *text_17* updates
    if (t >= 2.05 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }

    // *mouse_10* updates
    if (t >= 2.05 && mouse_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_10.tStart = t;  // (not accounting for frame time here)
      mouse_10.frameNStart = frameN;  // exact frame index
      
      mouse_10.status = PsychoJS.Status.STARTED;
      mouse_10.mouseClock.reset();
      prevButtonState = mouse_10.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_10.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_10.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_10.getPos();
          mouse_10.x.push(_mouseXYs[0]);
          mouse_10.y.push(_mouseXYs[1]);
          mouse_10.leftButton.push(_mouseButtons[0]);
          mouse_10.midButton.push(_mouseButtons[1]);
          mouse_10.rightButton.push(_mouseButtons[2]);
          mouse_10.time.push(mouse_10.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_19,image_21]) {
            if (obj.contains(mouse_10)) {
              gotValidClick = true;
              mouse_10.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_22.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ph3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ph3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Ph3'-------
    Ph3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("day_num1", temp_day1);
    psychoJS.experiment.addData("day_num2", temp_day2);
    psychoJS.experiment.addData("cnt", cnt);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_10.x) {  psychoJS.experiment.addData('mouse_10.x', mouse_10.x[0])};
    if (mouse_10.y) {  psychoJS.experiment.addData('mouse_10.y', mouse_10.y[0])};
    if (mouse_10.leftButton) {  psychoJS.experiment.addData('mouse_10.leftButton', mouse_10.leftButton[0])};
    if (mouse_10.midButton) {  psychoJS.experiment.addData('mouse_10.midButton', mouse_10.midButton[0])};
    if (mouse_10.rightButton) {  psychoJS.experiment.addData('mouse_10.rightButton', mouse_10.rightButton[0])};
    if (mouse_10.time) {  psychoJS.experiment.addData('mouse_10.time', mouse_10.time[0])};
    if (mouse_10.clicked_name) {  psychoJS.experiment.addData('mouse_10.clicked_name', mouse_10.clicked_name[0])};
    
    // the Routine "Ph3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stopComponents;
function stopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stop'-------
    t = 0;
    stopClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    stopComponents = [];
    stopComponents.push(text_stop);
    
    stopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stopRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stop'-------
    // get current time
    t = stopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_stop* updates
    if (t >= 0.0 && text_stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_stop.tStart = t;  // (not accounting for frame time here)
      text_stop.frameNStart = frameN;  // exact frame index
      
      text_stop.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_stop.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_stop.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stopRoutineEnd() {
  return async function () {
    //------Ending Routine 'stop'-------
    stopComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
