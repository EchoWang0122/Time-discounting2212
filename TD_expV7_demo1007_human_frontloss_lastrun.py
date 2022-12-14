#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on 五 10/ 7 21:51:16 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'test'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/wangshuning/Desktop/RA/time_discounting/TDv8demo1007_human_frontloss/TD_expV7_demo1007_human_frontloss_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='white', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "intro"
introClock = core.Clock()

list_10=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
myself_img=''

shuffle(list_10)



image_myself = visual.ImageStim(
    win=win,
    name='image_myself', 
    image='sin', mask=None,
    ori=0.0, pos=(0, -0.2), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_nextbutton = visual.ImageStim(
    win=win,
    name='image_nextbutton', 
    image='img/img_button/3button.jpg', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()
image_40 = visual.ImageStim(
    win=win,
    name='image_40', 
    image='img/img_instruction/intro_img.png', mask=None,
    ori=0.0, pos=(0, -0.1), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)

# Initialize components for Routine "logotestintro"
logotestintroClock = core.Clock()
image_24 = visual.ImageStim(
    win=win,
    name='image_24', 
    image='img/img_instruction/logotestintro.png', mask=None,
    ori=0.0, pos=(0,-0.15), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_nextbutton_2 = visual.ImageStim(
    win=win,
    name='image_nextbutton_2', 
    image='img/img_button/3button.jpg', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
mouse_14 = event.Mouse(win=win)
x, y = [None, None]
mouse_14.mouseClock = core.Clock()

# Initialize components for Routine "logotest_1"
logotest_1Clock = core.Clock()
list_1 = [1,2,3]
list_2 = [1,2,3]
list_3 = [1,2,3]
pic_1 = ''
pic_2 = ''
pic_3 = ''
pic_4 = ''
loc_x_1 = 0
loc_x_2 = 0
loc_x_3 = 0
loc_x_4 = 0
m = 0
pic_show=''
timescountdown=''

img_1 = visual.ImageStim(
    win=win,
    name='img_1', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
img_2 = visual.ImageStim(
    win=win,
    name='img_2', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
img_3 = visual.ImageStim(
    win=win,
    name='img_3', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
img_4 = visual.ImageStim(
    win=win,
    name='img_4', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
mouse_12 = event.Mouse(win=win)
x, y = [None, None]
mouse_12.mouseClock = core.Clock()
pic_5=''
pic_logo=''
image_41 = visual.ImageStim(
    win=win,
    name='image_41', 
    image='img/img_instruction/logotest1intro.png', mask=None,
    ori=0.0, pos=(0, -0.1), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)

# Initialize components for Routine "logotest_2"
logotest_2Clock = core.Clock()
image_25 = visual.ImageStim(
    win=win,
    name='image_25', 
    image='sin', mask=None,
    ori=0.0, pos=(0, -0.2), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_28 = visual.ImageStim(
    win=win,
    name='image_28', 
    image='sin', mask=None,
    ori=0.0, pos=(0, -0.05), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# Initialize components for Routine "PHASE2intro"
PHASE2introClock = core.Clock()
image_26 = visual.ImageStim(
    win=win,
    name='image_26', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
mouse_15 = event.Mouse(win=win)
x, y = [None, None]
mouse_15.mouseClock = core.Clock()
image_nextbutton_3 = visual.ImageStim(
    win=win,
    name='image_nextbutton_3', 
    image='sin', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
image_39 = visual.ImageStim(
    win=win,
    name='image_39', 
    image='sin', mask=None,
    ori=0.0, pos=(0, -0.15), size=(0.55, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "PHASE2intro_role"
PHASE2intro_roleClock = core.Clock()
text_46 = visual.TextStim(win=win, name='text_46',
    text='你所在班级被分配的角色是：',
    font='STSong',
    pos=(0, 0.03), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_47 = visual.TextStim(win=win, name='text_47',
    text='承受者',
    font='STSong',
    pos=(0, -0.03), height=0.035, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
mouse_22 = event.Mouse(win=win)
x, y = [None, None]
mouse_22.mouseClock = core.Clock()
image_52 = visual.ImageStim(
    win=win,
    name='image_52', 
    image='img/img_button/3button.jpg', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "ph2match"
ph2matchClock = core.Clock()
text_29 = visual.TextStim(win=win, name='text_29',
    text='正在等待决策者进入实验任务页面，请稍等.',
    font='STSong',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_30 = visual.TextStim(win=win, name='text_30',
    text='正在等待决策者进入实验任务页面，请稍等. .',
    font='STSong',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_31 = visual.TextStim(win=win, name='text_31',
    text='正在等待决策者进入实验任务页面，请稍等. . .',
    font='STSong',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "ph2v2test_code"
ph2v2test_codeClock = core.Clock()
student_IMG=''

list_11=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

shuffle(list_11)
time_dw = 0
timedown = ''

# Initialize components for Routine "ph2v2testpre"
ph2v2testpreClock = core.Clock()
image_42 = visual.ImageStim(
    win=win,
    name='image_42', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0.2), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
text_23 = visual.TextStim(win=win, name='text_23',
    text='这位决策者已经上线，马上准备开始任务',
    font='STSong',
    pos=(0, 0.03), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "time_down_num"
time_down_numClock = core.Clock()
list_timedown = [2,3,4]

# Initialize components for Routine "ph2v2test"
ph2v2testClock = core.Clock()
image_29 = visual.ImageStim(
    win=win,
    name='image_29', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0.2), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_27 = visual.TextStim(win=win, name='text_27',
    text='决策者正在作出选择.',
    font='STSong',
    pos=(0, 0.03), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_24 = visual.TextStim(win=win, name='text_24',
    text='决策者正在作出选择. .',
    font='STSong',
    pos=(0, 0.03), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_26 = visual.TextStim(win=win, name='text_26',
    text='决策者正在作出选择. . .',
    font='STSong',
    pos=(0, 0.03), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
image_30 = visual.ImageStim(
    win=win,
    name='image_30', 
    image='sin', mask=None,
    ori=0.0, pos=(0, -0.15), size=(0.9, 0.26),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)

# Initialize components for Routine "ph2v2test_1"
ph2v2test_1Clock = core.Clock()
startmoney=0


image_31 = visual.ImageStim(
    win=win,
    name='image_31', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0.2), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_32 = visual.ImageStim(
    win=win,
    name='image_32', 
    image='sin', mask=None,
    ori=0.0, pos=(0, -0.15), size=(0.95, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
image_33 = visual.ImageStim(
    win=win,
    name='image_33', 
    image='img/img_button/5button.png', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
mouse_13 = event.Mouse(win=win)
x, y = [None, None]
mouse_13.mouseClock = core.Clock()
text_32 = visual.TextStim(win=win, name='text_32',
    text='',
    font='STSong',
    pos=(0, 0.03), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "ph2scaleintro"
ph2scaleintroClock = core.Clock()
text_21 = visual.TextStim(win=win, name='text_21',
    text='根据刚才那位同学的所有选择，请评价你的情绪反应。\n\n如果准备好，请点击“下一页”开始。',
    font='STSong',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
image_nextbutton_4 = visual.ImageStim(
    win=win,
    name='image_nextbutton_4', 
    image='img/img_button/3button.jpg', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
mouse_16 = event.Mouse(win=win)
x, y = [None, None]
mouse_16.mouseClock = core.Clock()

# Initialize components for Routine "ph2scales"
ph2scalesClock = core.Clock()
slider_5 = visual.Slider(win=win, name='slider_5',
    startValue=None, size=(1.0, 0.05), pos=(0, -0.1), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    color='LightGray', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, depth=0, readOnly=False)
image_18 = visual.ImageStim(
    win=win,
    name='image_18', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(1.15, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_20 = visual.TextStim(win=win, name='text_20',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
image_45 = visual.ImageStim(
    win=win,
    name='image_45', 
    image='img/img_button/3button.jpg', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
mouse_19 = event.Mouse(win=win)
x, y = [None, None]
mouse_19.mouseClock = core.Clock()

# Initialize components for Routine "PHASE3instr"
PHASE3instrClock = core.Clock()
image_27 = visual.ImageStim(
    win=win,
    name='image_27', 
    image='img/img_instruction/PHASE3instr0928.png', mask=None,
    ori=0.0, pos=(0,0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_34 = visual.ImageStim(
    win=win,
    name='image_34', 
    image='img/img_button/3button.jpg', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
mouse_17 = event.Mouse(win=win)
x, y = [None, None]
mouse_17.mouseClock = core.Clock()

# Initialize components for Routine "PHASE3instr_2"
PHASE3instr_2Clock = core.Clock()
text_43 = visual.TextStim(win=win, name='text_43',
    text='',
    font='STSong',
    pos=(0.2, -0.03), height=0.03, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_42 = visual.TextStim(win=win, name='text_42',
    text='',
    font='STSong',
    pos=(-0.2, -0.03), height=0.03, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
image_37 = visual.ImageStim(
    win=win,
    name='image_37', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0.05), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
image_38 = visual.ImageStim(
    win=win,
    name='image_38', 
    image='sin', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
mouse_18 = event.Mouse(win=win)
x, y = [None, None]
mouse_18.mouseClock = core.Clock()
image_43 = visual.ImageStim(
    win=win,
    name='image_43', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.2, 0.07), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
image_44 = visual.ImageStim(
    win=win,
    name='image_44', 
    image='sin', mask=None,
    ori=0.0, pos=(0.2, 0.07), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)

# Initialize components for Routine "PHASE3intr_3"
PHASE3intr_3Clock = core.Clock()
image_48 = visual.ImageStim(
    win=win,
    name='image_48', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0.05), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_49 = visual.ImageStim(
    win=win,
    name='image_49', 
    image='sin', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_50 = visual.ImageStim(
    win=win,
    name='image_50', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.2, 0.16), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
image_51 = visual.ImageStim(
    win=win,
    name='image_51', 
    image='sin', mask=None,
    ori=0.0, pos=(0.2, 0.16), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
text_44 = visual.TextStim(win=win, name='text_44',
    text='',
    font='STSong',
    pos=(0.2, 0.07), height=0.03, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_45 = visual.TextStim(win=win, name='text_45',
    text='',
    font='STSong',
    pos=(-0.2, 0.07), height=0.03, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
mouse_21 = event.Mouse(win=win)
x, y = [None, None]
mouse_21.mouseClock = core.Clock()

# Initialize components for Routine "ph3_prequestion"
ph3_prequestionClock = core.Clock()
image_53 = visual.ImageStim(
    win=win,
    name='image_53', 
    image='img/img_instruction/PHASE3question.png', mask=None,
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_54 = visual.ImageStim(
    win=win,
    name='image_54', 
    image='img/img_button/3button.jpg', mask=None,
    ori=0.0, pos=(0.5, -0.4), size=(0.12, 0.07),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
mouse_23 = event.Mouse(win=win)
x, y = [None, None]
mouse_23.mouseClock = core.Clock()

# Initialize components for Routine "Ph3"
Ph3Clock = core.Clock()
day_num1 = ''
day_num2 = ''
list_pic1 = ['img/img_person/py1.png','img/img_person/py2.png','img/img_person/py3.png','img/img_person/py4.png','img/img_person/py5.png','img/img_person/py6.png','img/img_person/py7.png','img/img_person/py8.png','img/img_person/py9.png','img/img_person/py10.png']
list_pic2 = ['img/img_person/py11.png','img/img_person/py12.png','img/img_person/py13.png','img/img_person/py14.png','img/img_person/py15.png','img/img_person/py16.png','img/img_person/py17.png','img/img_person/py18.png','img/img_person/py19.png','img/img_person/py20.png']
shuffle(list_pic1)
shuffle(list_pic2)

#list_day = [1,2,3,4,5,6,7]
temp_1 = 0
temp_2 = 0
temp_day1 = 0
temp_day2 = 0
list_pic = []
list_pic_days = []
cnt = 0
image_ph3instr = visual.ImageStim(
    win=win,
    name='image_ph3instr', 
    image='img/img_instruction/ph3instr.png', mask=None,
    ori=0.0, pos=(0, 0.1), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_19 = visual.ImageStim(
    win=win,
    name='image_19', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.2, 0), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
image_21 = visual.ImageStim(
    win=win,
    name='image_21', 
    image='sin', mask=None,
    ori=0.0, pos=(0.2, 0), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
text_16 = visual.TextStim(win=win, name='text_16',
    text='',
    font='STSong',
    pos=(-0.2, -0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_17 = visual.TextStim(win=win, name='text_17',
    text='',
    font='STSong',
    pos=(0.2, -0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
mouse_10 = event.Mouse(win=win)
x, y = [None, None]
mouse_10.mouseClock = core.Clock()
text_22 = visual.TextStim(win=win, name='text_22',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "stop"
stopClock = core.Clock()
text_stop = visual.TextStim(win=win, name='text_stop',
    text='请休息5分钟，再继续下一部分的实验',
    font='STSong',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
trials_5 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond/myself_cond0914.xlsx'),
    seed=None, name='trials_5')
thisExp.addLoop(trials_5)  # add the loop to the experiment
thisTrial_5 = trials_5.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_5.rgb)
if thisTrial_5 != None:
    for paramName in thisTrial_5:
        exec('{} = thisTrial_5[paramName]'.format(paramName))

for thisTrial_5 in trials_5:
    currentLoop = trials_5
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_5.rgb)
    if thisTrial_5 != None:
        for paramName in thisTrial_5:
            exec('{} = thisTrial_5[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "intro"-------
    continueRoutine = True
    # update component parameters for each repeat
    if list_10[0] == 1:
        myself_img = myself_1
    
    if list_10[0] == 2:
        myself_img = myself_2
    
    if list_10[0] == 3:
        myself_img = myself_3
        
    if list_10[0] == 4:
        myself_img = myself_4
        
    if list_10[0] == 5:
        myself_img = myself_5
        
    if list_10[0] == 6:
        myself_img = myself_6
        
    if list_10[0] == 7:
        myself_img = myself_7
        
    if list_10[0] == 8:
        myself_img = myself_8
        
    if list_10[8] == 9:
        myself_img = myself_9
        
    if list_10[0] == 10:
        myself_img = myself_10
        
    if list_10[0] == 11:
        myself_img = myself_11
        
    if list_10[0] == 12:
        myself_img = myself_12
        
    if list_10[0] == 13:
        myself_img = myself_13
        
    if list_10[0] == 14:
        myself_img = myself_14
        
    if list_10[0] == 15:
        myself_img = myself_15
        
    if list_10[0] == 16:
        myself_img = myself_16
        
    if list_10[0] == 17:
        myself_img = myself_17
        
    if list_10[0] == 18:
        myself_img = myself_18
        
    if list_10[0] == 19:
        myself_img = myself_19
        
    if list_10[0] == 20:
        myself_img = myself_20
    image_myself.setImage(myself_img)
    # setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    introComponents = [image_myself, image_nextbutton, mouse_3, image_40]
    for thisComponent in introComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "intro"-------
    while continueRoutine:
        # get current time
        t = introClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=introClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_myself* updates
        if image_myself.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_myself.frameNStart = frameN  # exact frame index
            image_myself.tStart = t  # local t and not account for scr refresh
            image_myself.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_myself, 'tStartRefresh')  # time at next scr refresh
            image_myself.setAutoDraw(True)
        
        # *image_nextbutton* updates
        if image_nextbutton.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_nextbutton.frameNStart = frameN  # exact frame index
            image_nextbutton.tStart = t  # local t and not account for scr refresh
            image_nextbutton.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_nextbutton, 'tStartRefresh')  # time at next scr refresh
            image_nextbutton.setAutoDraw(True)
        # *mouse_3* updates
        if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_3.frameNStart = frameN  # exact frame index
            mouse_3.tStart = t  # local t and not account for scr refresh
            mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
            mouse_3.status = STARTED
            mouse_3.mouseClock.reset()
            prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
        if mouse_3.status == STARTED:  # only update if started and not finished!
            buttons = mouse_3.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(image_nextbutton)
                        clickableList = image_nextbutton
                    except:
                        clickableList = [image_nextbutton]
                    for obj in clickableList:
                        if obj.contains(mouse_3):
                            gotValidClick = True
                            mouse_3.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *image_40* updates
        if image_40.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_40.frameNStart = frameN  # exact frame index
            image_40.tStart = t  # local t and not account for scr refresh
            image_40.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_40, 'tStartRefresh')  # time at next scr refresh
            image_40.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in introComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "intro"-------
    for thisComponent in introComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_5.addData('image_myself.started', image_myself.tStartRefresh)
    trials_5.addData('image_myself.stopped', image_myself.tStopRefresh)
    trials_5.addData('image_nextbutton.started', image_nextbutton.tStartRefresh)
    trials_5.addData('image_nextbutton.stopped', image_nextbutton.tStopRefresh)
    # store data for trials_5 (TrialHandler)
    x, y = mouse_3.getPos()
    buttons = mouse_3.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(image_nextbutton)
            clickableList = image_nextbutton
        except:
            clickableList = [image_nextbutton]
        for obj in clickableList:
            if obj.contains(mouse_3):
                gotValidClick = True
                mouse_3.clicked_name.append(obj.name)
    trials_5.addData('mouse_3.x', x)
    trials_5.addData('mouse_3.y', y)
    trials_5.addData('mouse_3.leftButton', buttons[0])
    trials_5.addData('mouse_3.midButton', buttons[1])
    trials_5.addData('mouse_3.rightButton', buttons[2])
    if len(mouse_3.clicked_name):
        trials_5.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])
    trials_5.addData('mouse_3.started', mouse_3.tStart)
    trials_5.addData('mouse_3.stopped', mouse_3.tStop)
    trials_5.addData('image_40.started', image_40.tStartRefresh)
    trials_5.addData('image_40.stopped', image_40.tStopRefresh)
    # the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_5'


# ------Prepare to start Routine "logotestintro"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_14
mouse_14.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
logotestintroComponents = [image_24, image_nextbutton_2, mouse_14]
for thisComponent in logotestintroComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
logotestintroClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "logotestintro"-------
while continueRoutine:
    # get current time
    t = logotestintroClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=logotestintroClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_24* updates
    if image_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_24.frameNStart = frameN  # exact frame index
        image_24.tStart = t  # local t and not account for scr refresh
        image_24.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_24, 'tStartRefresh')  # time at next scr refresh
        image_24.setAutoDraw(True)
    
    # *image_nextbutton_2* updates
    if image_nextbutton_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_nextbutton_2.frameNStart = frameN  # exact frame index
        image_nextbutton_2.tStart = t  # local t and not account for scr refresh
        image_nextbutton_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_nextbutton_2, 'tStartRefresh')  # time at next scr refresh
        image_nextbutton_2.setAutoDraw(True)
    # *mouse_14* updates
    if mouse_14.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_14.frameNStart = frameN  # exact frame index
        mouse_14.tStart = t  # local t and not account for scr refresh
        mouse_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_14, 'tStartRefresh')  # time at next scr refresh
        mouse_14.status = STARTED
        mouse_14.mouseClock.reset()
        prevButtonState = mouse_14.getPressed()  # if button is down already this ISN'T a new click
    if mouse_14.status == STARTED:  # only update if started and not finished!
        buttons = mouse_14.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(image_nextbutton_2)
                    clickableList = image_nextbutton_2
                except:
                    clickableList = [image_nextbutton_2]
                for obj in clickableList:
                    if obj.contains(mouse_14):
                        gotValidClick = True
                        mouse_14.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in logotestintroComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "logotestintro"-------
for thisComponent in logotestintroComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_24.started', image_24.tStartRefresh)
thisExp.addData('image_24.stopped', image_24.tStopRefresh)
thisExp.addData('image_nextbutton_2.started', image_nextbutton_2.tStartRefresh)
thisExp.addData('image_nextbutton_2.stopped', image_nextbutton_2.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_14.getPos()
buttons = mouse_14.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(image_nextbutton_2)
        clickableList = image_nextbutton_2
    except:
        clickableList = [image_nextbutton_2]
    for obj in clickableList:
        if obj.contains(mouse_14):
            gotValidClick = True
            mouse_14.clicked_name.append(obj.name)
thisExp.addData('mouse_14.x', x)
thisExp.addData('mouse_14.y', y)
thisExp.addData('mouse_14.leftButton', buttons[0])
thisExp.addData('mouse_14.midButton', buttons[1])
thisExp.addData('mouse_14.rightButton', buttons[2])
if len(mouse_14.clicked_name):
    thisExp.addData('mouse_14.clicked_name', mouse_14.clicked_name[0])
thisExp.addData('mouse_14.started', mouse_14.tStart)
thisExp.addData('mouse_14.stopped', mouse_14.tStop)
thisExp.nextEntry()
# the Routine "logotestintro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond/cond0901.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "logotest_1"-------
    continueRoutine = True
    # update component parameters for each repeat
    list_loc_1 = [-0.45,-0.15,0.15,0.45]
    shuffle(list_1)
    shuffle(list_2)
    shuffle(list_3)
    shuffle(list_loc_1)
    loc_x_1 = list_loc_1[0]
    loc_x_2 = list_loc_1[1]
    loc_x_3 = list_loc_1[2]
    loc_x_4 = list_loc_1[3]
    
    
    if list_10[0] == 1:
        pic_4 = myself_1
        
    if list_10[0] == 2:
        pic_4 = myself_2
        
    if list_10[0] == 3:
        pic_4 = myself_3
        
    if list_10[0] == 4:
        pic_4 = myself_4
        
    if list_10[0] == 5:
        pic_4 = myself_5
        
    if list_10[0] == 6:
        pic_4 = myself_6
        
    if list_10[0] == 7:
        pic_4 = myself_7
        
    if list_10[0] == 8:
        pic_4 = myself_8
        
    if list_10[0] == 9:
        pic_4 = myself_9
        
    if list_10[0] == 10:
        pic_4 = myself_10
        
    if list_10[0] == 11:
        pic_4 = myself_11
        
    if list_10[0] == 12:
        pic_4 = myself_12
        
    if list_10[0] == 13:
        pic_4 = myself_13
        
    if list_10[0] == 14:
        pic_4 = myself_14
        
    if list_10[0] == 15:
        pic_4 = myself_15
        
    if list_10[0] == 16:
        pic_4 = myself_16
        
    if list_10[0] == 17:
        pic_4 = myself_17
        
    if list_10[0] == 18:
        pic_4 = myself_18
        
    if list_10[0] == 19:
        pic_4 = myself_19
        
    if list_10[0] == 20:
        pic_4 = myself_20
        
    if list_1[0] == 1:
        pic_1 = PIC_A
        
    if list_1[0] == 2:
        pic_1 = PIC_B
    
    if list_1[0] == 3:
        pic_1 = PIC_C
        
    if list_2[0] == 1:
        pic_2 = PIC_D
        
    if list_2[0] == 2:
        pic_2 = PIC_E
    
    if list_2[0] == 3:
        pic_2 = PIC_F
    
    if list_3[0] == 1:
        pic_3 = PIC_G
        
    if list_3[0] == 2:
        pic_3 = PIC_H
    
    if list_3[0] == 3:
        pic_3 = PIC_I
    img_1.setPos((loc_x_1, 0))
    img_1.setImage(pic_1)
    img_2.setPos((loc_x_2, 0))
    img_2.setImage(pic_2)
    img_3.setPos((loc_x_3, 0))
    img_3.setImage(pic_3)
    img_4.setPos((loc_x_4, 0))
    img_4.setImage(pic_4)
    # setup some python lists for storing info about the mouse_12
    mouse_12.clicked_name = []
    gotValidClick = False  # until a click is received
    if list_10[0] == 1:
        pic_5 = myself_1
        
    if list_10[0] == 2:
        pic_5 = myself_2
        
    if list_10[0] == 3:
        pic_5 = myself_3
        
    if list_10[0] == 4:
        pic_5 = myself_4
        
    if list_10[0] == 5:
        pic_5 = myself_5
        
    if list_10[0] == 6:
        pic_5 = myself_6
        
    if list_10[0] == 7:
        pic_5 = myself_7
        
    if list_10[0] == 8:
        pic_5 = myself_8
        
    if list_10[0] == 9:
        pic_5 = myself_9
        
    if list_10[0] == 10:
        pic_5 = myself_10
        
    if list_10[0] == 11:
        pic_5 = myself_11
        
    if list_10[0] == 12:
        pic_5 = myself_12
        
    if list_10[0] == 13:
        pic_5 = myself_13
        
    if list_10[0] == 14:
        pic_5 = myself_14
        
    if list_10[0] == 15:
        pic_5 = myself_15
        
    if list_10[0] == 16:
        pic_5 = myself_16
        
    if list_10[0] == 17:
        pic_5 = myself_17
        
    if list_10[0] == 18:
        pic_5 = myself_18
        
    if list_10[0] == 19:
        pic_5 = myself_19
        
    if list_10[0] == 20:
        pic_5 = myself_20
    # keep track of which components have finished
    logotest_1Components = [img_1, img_2, img_3, img_4, mouse_12, image_41]
    for thisComponent in logotest_1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    logotest_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "logotest_1"-------
    while continueRoutine:
        # get current time
        t = logotest_1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=logotest_1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *img_1* updates
        if img_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_1.frameNStart = frameN  # exact frame index
            img_1.tStart = t  # local t and not account for scr refresh
            img_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_1, 'tStartRefresh')  # time at next scr refresh
            img_1.setAutoDraw(True)
        
        # *img_2* updates
        if img_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_2.frameNStart = frameN  # exact frame index
            img_2.tStart = t  # local t and not account for scr refresh
            img_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_2, 'tStartRefresh')  # time at next scr refresh
            img_2.setAutoDraw(True)
        
        # *img_3* updates
        if img_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_3.frameNStart = frameN  # exact frame index
            img_3.tStart = t  # local t and not account for scr refresh
            img_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_3, 'tStartRefresh')  # time at next scr refresh
            img_3.setAutoDraw(True)
        
        # *img_4* updates
        if img_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_4.frameNStart = frameN  # exact frame index
            img_4.tStart = t  # local t and not account for scr refresh
            img_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_4, 'tStartRefresh')  # time at next scr refresh
            img_4.setAutoDraw(True)
        # *mouse_12* updates
        if mouse_12.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_12.frameNStart = frameN  # exact frame index
            mouse_12.tStart = t  # local t and not account for scr refresh
            mouse_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_12, 'tStartRefresh')  # time at next scr refresh
            mouse_12.status = STARTED
            mouse_12.mouseClock.reset()
            prevButtonState = mouse_12.getPressed()  # if button is down already this ISN'T a new click
        if mouse_12.status == STARTED:  # only update if started and not finished!
            buttons = mouse_12.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter([img_1,img_2,img_3,img_4])
                        clickableList = [img_1,img_2,img_3,img_4]
                    except:
                        clickableList = [[img_1,img_2,img_3,img_4]]
                    for obj in clickableList:
                        if obj.contains(mouse_12):
                            gotValidClick = True
                            mouse_12.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *image_41* updates
        if image_41.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_41.frameNStart = frameN  # exact frame index
            image_41.tStart = t  # local t and not account for scr refresh
            image_41.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_41, 'tStartRefresh')  # time at next scr refresh
            image_41.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in logotest_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "logotest_1"-------
    for thisComponent in logotest_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if mouse_12.isPressedIn(img_4):
            timescountdown= 1
            pic_show = PIC_right
            m = m+1
            if m >=3 :
               pic_show = PIC_pass
               timescountdown= 3
               trials.finished = True
    else:
            pic_show = PIC_wrong
            timescountdown= 5
            m = 0
    trials.addData('img_1.started', img_1.tStartRefresh)
    trials.addData('img_1.stopped', img_1.tStopRefresh)
    trials.addData('img_2.started', img_2.tStartRefresh)
    trials.addData('img_2.stopped', img_2.tStopRefresh)
    trials.addData('img_3.started', img_3.tStartRefresh)
    trials.addData('img_3.stopped', img_3.tStopRefresh)
    trials.addData('img_4.started', img_4.tStartRefresh)
    trials.addData('img_4.stopped', img_4.tStopRefresh)
    # store data for trials (TrialHandler)
    x, y = mouse_12.getPos()
    buttons = mouse_12.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter([img_1,img_2,img_3,img_4])
            clickableList = [img_1,img_2,img_3,img_4]
        except:
            clickableList = [[img_1,img_2,img_3,img_4]]
        for obj in clickableList:
            if obj.contains(mouse_12):
                gotValidClick = True
                mouse_12.clicked_name.append(obj.name)
    trials.addData('mouse_12.x', x)
    trials.addData('mouse_12.y', y)
    trials.addData('mouse_12.leftButton', buttons[0])
    trials.addData('mouse_12.midButton', buttons[1])
    trials.addData('mouse_12.rightButton', buttons[2])
    if len(mouse_12.clicked_name):
        trials.addData('mouse_12.clicked_name', mouse_12.clicked_name[0])
    trials.addData('mouse_12.started', mouse_12.tStart)
    trials.addData('mouse_12.stopped', mouse_12.tStop)
    if mouse_12.isPressedIn(img_4):
            pic_logo = blank
            
    else:
            pic_logo = pic_5
    
    trials.addData('image_41.started', image_41.tStartRefresh)
    trials.addData('image_41.stopped', image_41.tStopRefresh)
    # the Routine "logotest_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials_7 = data.TrialHandler(nReps=timescountdown, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_7')
    thisExp.addLoop(trials_7)  # add the loop to the experiment
    thisTrial_7 = trials_7.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_7.rgb)
    if thisTrial_7 != None:
        for paramName in thisTrial_7:
            exec('{} = thisTrial_7[paramName]'.format(paramName))
    
    for thisTrial_7 in trials_7:
        currentLoop = trials_7
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_7.rgb)
        if thisTrial_7 != None:
            for paramName in thisTrial_7:
                exec('{} = thisTrial_7[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "logotest_2"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        image_25.setImage(pic_show)
        image_28.setImage(pic_logo)
        # keep track of which components have finished
        logotest_2Components = [image_25, image_28]
        for thisComponent in logotest_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        logotest_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "logotest_2"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = logotest_2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=logotest_2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_25* updates
            if image_25.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_25.frameNStart = frameN  # exact frame index
                image_25.tStart = t  # local t and not account for scr refresh
                image_25.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_25, 'tStartRefresh')  # time at next scr refresh
                image_25.setAutoDraw(True)
            if image_25.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_25.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_25.tStop = t  # not accounting for scr refresh
                    image_25.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_25, 'tStopRefresh')  # time at next scr refresh
                    image_25.setAutoDraw(False)
            
            # *image_28* updates
            if image_28.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_28.frameNStart = frameN  # exact frame index
                image_28.tStart = t  # local t and not account for scr refresh
                image_28.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_28, 'tStartRefresh')  # time at next scr refresh
                image_28.setAutoDraw(True)
            if image_28.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_28.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_28.tStop = t  # not accounting for scr refresh
                    image_28.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_28, 'tStopRefresh')  # time at next scr refresh
                    image_28.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in logotest_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "logotest_2"-------
        for thisComponent in logotest_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials_7.addData('image_25.started', image_25.tStartRefresh)
        trials_7.addData('image_25.stopped', image_25.tStopRefresh)
        trials_7.addData('image_28.started', image_28.tStartRefresh)
        trials_7.addData('image_28.stopped', image_28.tStopRefresh)
        timescountdown-= 0
        thisExp.nextEntry()
        
    # completed timescountdown repeats of 'trials_7'
    
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# set up handler to look after randomisation of conditions etc
trials_9 = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond/PHASE2intropre.xlsx'),
    seed=None, name='trials_9')
thisExp.addLoop(trials_9)  # add the loop to the experiment
thisTrial_9 = trials_9.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_9.rgb)
if thisTrial_9 != None:
    for paramName in thisTrial_9:
        exec('{} = thisTrial_9[paramName]'.format(paramName))

for thisTrial_9 in trials_9:
    currentLoop = trials_9
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_9.rgb)
    if thisTrial_9 != None:
        for paramName in thisTrial_9:
            exec('{} = thisTrial_9[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "PHASE2intro"-------
    continueRoutine = True
    # update component parameters for each repeat
    image_26.setImage(ph2intropre)
    # setup some python lists for storing info about the mouse_15
    mouse_15.clicked_name = []
    gotValidClick = False  # until a click is received
    image_nextbutton_3.setImage(button)
    image_39.setImage(ph2intro_img)
    # keep track of which components have finished
    PHASE2introComponents = [image_26, mouse_15, image_nextbutton_3, image_39]
    for thisComponent in PHASE2introComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    PHASE2introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "PHASE2intro"-------
    while continueRoutine:
        # get current time
        t = PHASE2introClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=PHASE2introClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_26* updates
        if image_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_26.frameNStart = frameN  # exact frame index
            image_26.tStart = t  # local t and not account for scr refresh
            image_26.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_26, 'tStartRefresh')  # time at next scr refresh
            image_26.setAutoDraw(True)
        # *mouse_15* updates
        if mouse_15.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_15.frameNStart = frameN  # exact frame index
            mouse_15.tStart = t  # local t and not account for scr refresh
            mouse_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_15, 'tStartRefresh')  # time at next scr refresh
            mouse_15.status = STARTED
            mouse_15.mouseClock.reset()
            prevButtonState = mouse_15.getPressed()  # if button is down already this ISN'T a new click
        if mouse_15.status == STARTED:  # only update if started and not finished!
            buttons = mouse_15.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(image_nextbutton_3)
                        clickableList = image_nextbutton_3
                    except:
                        clickableList = [image_nextbutton_3]
                    for obj in clickableList:
                        if obj.contains(mouse_15):
                            gotValidClick = True
                            mouse_15.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *image_nextbutton_3* updates
        if image_nextbutton_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_nextbutton_3.frameNStart = frameN  # exact frame index
            image_nextbutton_3.tStart = t  # local t and not account for scr refresh
            image_nextbutton_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_nextbutton_3, 'tStartRefresh')  # time at next scr refresh
            image_nextbutton_3.setAutoDraw(True)
        
        # *image_39* updates
        if image_39.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_39.frameNStart = frameN  # exact frame index
            image_39.tStart = t  # local t and not account for scr refresh
            image_39.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_39, 'tStartRefresh')  # time at next scr refresh
            image_39.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in PHASE2introComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "PHASE2intro"-------
    for thisComponent in PHASE2introComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_9.addData('image_26.started', image_26.tStartRefresh)
    trials_9.addData('image_26.stopped', image_26.tStopRefresh)
    # store data for trials_9 (TrialHandler)
    x, y = mouse_15.getPos()
    buttons = mouse_15.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(image_nextbutton_3)
            clickableList = image_nextbutton_3
        except:
            clickableList = [image_nextbutton_3]
        for obj in clickableList:
            if obj.contains(mouse_15):
                gotValidClick = True
                mouse_15.clicked_name.append(obj.name)
    trials_9.addData('mouse_15.x', x)
    trials_9.addData('mouse_15.y', y)
    trials_9.addData('mouse_15.leftButton', buttons[0])
    trials_9.addData('mouse_15.midButton', buttons[1])
    trials_9.addData('mouse_15.rightButton', buttons[2])
    if len(mouse_15.clicked_name):
        trials_9.addData('mouse_15.clicked_name', mouse_15.clicked_name[0])
    trials_9.addData('mouse_15.started', mouse_15.tStart)
    trials_9.addData('mouse_15.stopped', mouse_15.tStop)
    trials_9.addData('image_nextbutton_3.started', image_nextbutton_3.tStartRefresh)
    trials_9.addData('image_nextbutton_3.stopped', image_nextbutton_3.tStopRefresh)
    trials_9.addData('image_39.started', image_39.tStartRefresh)
    trials_9.addData('image_39.stopped', image_39.tStopRefresh)
    # the Routine "PHASE2intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'trials_9'


# ------Prepare to start Routine "PHASE2intro_role"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_22
mouse_22.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
PHASE2intro_roleComponents = [text_46, text_47, mouse_22, image_52]
for thisComponent in PHASE2intro_roleComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
PHASE2intro_roleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "PHASE2intro_role"-------
while continueRoutine:
    # get current time
    t = PHASE2intro_roleClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=PHASE2intro_roleClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_46* updates
    if text_46.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_46.frameNStart = frameN  # exact frame index
        text_46.tStart = t  # local t and not account for scr refresh
        text_46.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_46, 'tStartRefresh')  # time at next scr refresh
        text_46.setAutoDraw(True)
    
    # *text_47* updates
    if text_47.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        text_47.frameNStart = frameN  # exact frame index
        text_47.tStart = t  # local t and not account for scr refresh
        text_47.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_47, 'tStartRefresh')  # time at next scr refresh
        text_47.setAutoDraw(True)
    # *mouse_22* updates
    if mouse_22.status == NOT_STARTED and t >= 0-frameTolerance:
        # keep track of start time/frame for later
        mouse_22.frameNStart = frameN  # exact frame index
        mouse_22.tStart = t  # local t and not account for scr refresh
        mouse_22.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_22, 'tStartRefresh')  # time at next scr refresh
        mouse_22.status = STARTED
        mouse_22.mouseClock.reset()
        prevButtonState = mouse_22.getPressed()  # if button is down already this ISN'T a new click
    if mouse_22.status == STARTED:  # only update if started and not finished!
        buttons = mouse_22.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(image_52)
                    clickableList = image_52
                except:
                    clickableList = [image_52]
                for obj in clickableList:
                    if obj.contains(mouse_22):
                        gotValidClick = True
                        mouse_22.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # *image_52* updates
    if image_52.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        image_52.frameNStart = frameN  # exact frame index
        image_52.tStart = t  # local t and not account for scr refresh
        image_52.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_52, 'tStartRefresh')  # time at next scr refresh
        image_52.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PHASE2intro_roleComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "PHASE2intro_role"-------
for thisComponent in PHASE2intro_roleComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_46.started', text_46.tStartRefresh)
thisExp.addData('text_46.stopped', text_46.tStopRefresh)
thisExp.addData('text_47.started', text_47.tStartRefresh)
thisExp.addData('text_47.stopped', text_47.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_22.getPos()
buttons = mouse_22.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(image_52)
        clickableList = image_52
    except:
        clickableList = [image_52]
    for obj in clickableList:
        if obj.contains(mouse_22):
            gotValidClick = True
            mouse_22.clicked_name.append(obj.name)
thisExp.addData('mouse_22.x', x)
thisExp.addData('mouse_22.y', y)
thisExp.addData('mouse_22.leftButton', buttons[0])
thisExp.addData('mouse_22.midButton', buttons[1])
thisExp.addData('mouse_22.rightButton', buttons[2])
if len(mouse_22.clicked_name):
    thisExp.addData('mouse_22.clicked_name', mouse_22.clicked_name[0])
thisExp.addData('mouse_22.started', mouse_22.tStart)
thisExp.addData('mouse_22.stopped', mouse_22.tStop)
thisExp.nextEntry()
thisExp.addData('image_52.started', image_52.tStartRefresh)
thisExp.addData('image_52.stopped', image_52.tStopRefresh)
# the Routine "PHASE2intro_role" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_3 = data.TrialHandler(nReps=2.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_3')
thisExp.addLoop(trials_3)  # add the loop to the experiment
thisTrial_3 = trials_3.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
if thisTrial_3 != None:
    for paramName in thisTrial_3:
        exec('{} = thisTrial_3[paramName]'.format(paramName))

for thisTrial_3 in trials_3:
    currentLoop = trials_3
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
    if thisTrial_3 != None:
        for paramName in thisTrial_3:
            exec('{} = thisTrial_3[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "ph2match"-------
    continueRoutine = True
    routineTimer.add(6.050000)
    # update component parameters for each repeat
    # keep track of which components have finished
    ph2matchComponents = [text_29, text_30, text_31]
    for thisComponent in ph2matchComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ph2matchClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ph2match"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ph2matchClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ph2matchClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_29* updates
        if text_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_29.frameNStart = frameN  # exact frame index
            text_29.tStart = t  # local t and not account for scr refresh
            text_29.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_29, 'tStartRefresh')  # time at next scr refresh
            text_29.setAutoDraw(True)
        if text_29.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_29.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                text_29.tStop = t  # not accounting for scr refresh
                text_29.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_29, 'tStopRefresh')  # time at next scr refresh
                text_29.setAutoDraw(False)
        
        # *text_30* updates
        if text_30.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            text_30.frameNStart = frameN  # exact frame index
            text_30.tStart = t  # local t and not account for scr refresh
            text_30.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_30, 'tStartRefresh')  # time at next scr refresh
            text_30.setAutoDraw(True)
        if text_30.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_30.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                text_30.tStop = t  # not accounting for scr refresh
                text_30.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_30, 'tStopRefresh')  # time at next scr refresh
                text_30.setAutoDraw(False)
        
        # *text_31* updates
        if text_31.status == NOT_STARTED and tThisFlip >= 4.05-frameTolerance:
            # keep track of start time/frame for later
            text_31.frameNStart = frameN  # exact frame index
            text_31.tStart = t  # local t and not account for scr refresh
            text_31.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_31, 'tStartRefresh')  # time at next scr refresh
            text_31.setAutoDraw(True)
        if text_31.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_31.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                text_31.tStop = t  # not accounting for scr refresh
                text_31.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_31, 'tStopRefresh')  # time at next scr refresh
                text_31.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ph2matchComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ph2match"-------
    for thisComponent in ph2matchComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_3.addData('text_29.started', text_29.tStartRefresh)
    trials_3.addData('text_29.stopped', text_29.tStopRefresh)
    trials_3.addData('text_30.started', text_30.tStartRefresh)
    trials_3.addData('text_30.stopped', text_30.tStopRefresh)
    trials_3.addData('text_31.started', text_31.tStartRefresh)
    trials_3.addData('text_31.stopped', text_31.tStopRefresh)
    thisExp.nextEntry()
    
# completed 2.0 repeats of 'trials_3'


# set up handler to look after randomisation of conditions etc
trials_10 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond/ph2v2pre_cond.xlsx'),
    seed=None, name='trials_10')
thisExp.addLoop(trials_10)  # add the loop to the experiment
thisTrial_10 = trials_10.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_10.rgb)
if thisTrial_10 != None:
    for paramName in thisTrial_10:
        exec('{} = thisTrial_10[paramName]'.format(paramName))

for thisTrial_10 in trials_10:
    currentLoop = trials_10
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_10.rgb)
    if thisTrial_10 != None:
        for paramName in thisTrial_10:
            exec('{} = thisTrial_10[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "ph2v2test_code"-------
    continueRoutine = True
    # update component parameters for each repeat
    if list_11[0] == 1:
        student_IMG = student_1
    
    if list_11[0] == 2:
        student_IMG = student_2
    
    if list_11[0] == 3:
        student_IMG = student_3
        
    if list_11[0] == 4:
        student_IMG = student_4
        
    if list_11[0] == 5:
        student_IMG = student_5
        
    if list_11[0] == 6:
        student_IMG = student_6
        
    if list_11[0] == 7:
        student_IMG = student_7
        
    if list_11[0] == 8:
        student_IMG = student_8
        
    if list_11[8] == 9:
        student_IMG = student_9
        
    if list_11[0] == 10:
        student_IMG = student_10
        
    if list_11[0] == 11:
        student_IMG = student_11
        
    if list_11[0] == 12:
        student_IMG = student_12
        
    if list_11[0] == 13:
        student_IMG = student_13
        
    if list_11[0] == 14:
        student_IMG = student_14
        
    if list_11[0] == 15:
        student_IMG = student_15
        
    if list_11[0] == 16:
        student_IMG = student_16
        
    if list_11[0] == 17:
        student_IMG = student_17
        
    if list_11[0] == 18:
        student_IMG = student_18
        
    if list_11[0] == 19:
        student_IMG = student_19
        
    if list_11[0] == 20:
        student_IMG = student_20
    
    timedown = '倒计时'+str(time_dw)
    # keep track of which components have finished
    ph2v2test_codeComponents = []
    for thisComponent in ph2v2test_codeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ph2v2test_codeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ph2v2test_code"-------
    while continueRoutine:
        # get current time
        t = ph2v2test_codeClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ph2v2test_codeClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ph2v2test_codeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ph2v2test_code"-------
    for thisComponent in ph2v2test_codeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "ph2v2test_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "ph2v2testpre"-------
    continueRoutine = True
    routineTimer.add(7.000000)
    # update component parameters for each repeat
    image_42.setImage(student_IMG)
    # keep track of which components have finished
    ph2v2testpreComponents = [image_42, text_23]
    for thisComponent in ph2v2testpreComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ph2v2testpreClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ph2v2testpre"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ph2v2testpreClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ph2v2testpreClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_42* updates
        if image_42.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            image_42.frameNStart = frameN  # exact frame index
            image_42.tStart = t  # local t and not account for scr refresh
            image_42.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_42, 'tStartRefresh')  # time at next scr refresh
            image_42.setAutoDraw(True)
        if image_42.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_42.tStartRefresh + 7-frameTolerance:
                # keep track of stop time/frame for later
                image_42.tStop = t  # not accounting for scr refresh
                image_42.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_42, 'tStopRefresh')  # time at next scr refresh
                image_42.setAutoDraw(False)
        
        # *text_23* updates
        if text_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_23.frameNStart = frameN  # exact frame index
            text_23.tStart = t  # local t and not account for scr refresh
            text_23.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_23, 'tStartRefresh')  # time at next scr refresh
            text_23.setAutoDraw(True)
        if text_23.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_23.tStartRefresh + 7-frameTolerance:
                # keep track of stop time/frame for later
                text_23.tStop = t  # not accounting for scr refresh
                text_23.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_23, 'tStopRefresh')  # time at next scr refresh
                text_23.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ph2v2testpreComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ph2v2testpre"-------
    for thisComponent in ph2v2testpreComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_10.addData('image_42.started', image_42.tStartRefresh)
    trials_10.addData('image_42.stopped', image_42.tStopRefresh)
    trials_10.addData('text_23.started', text_23.tStartRefresh)
    trials_10.addData('text_23.stopped', text_23.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_10'


# set up handler to look after randomisation of conditions etc
trials_6 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond/ph2_stimuli_cond.xlsx'),
    seed=None, name='trials_6')
thisExp.addLoop(trials_6)  # add the loop to the experiment
thisTrial_6 = trials_6.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_6.rgb)
if thisTrial_6 != None:
    for paramName in thisTrial_6:
        exec('{} = thisTrial_6[paramName]'.format(paramName))

for thisTrial_6 in trials_6:
    currentLoop = trials_6
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_6.rgb)
    if thisTrial_6 != None:
        for paramName in thisTrial_6:
            exec('{} = thisTrial_6[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "time_down_num"-------
    continueRoutine = True
    # update component parameters for each repeat
    shuffle(list_timedown)
    time_dw = list_timedown[0]
    
    # keep track of which components have finished
    time_down_numComponents = []
    for thisComponent in time_down_numComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    time_down_numClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "time_down_num"-------
    while continueRoutine:
        # get current time
        t = time_down_numClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=time_down_numClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in time_down_numComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "time_down_num"-------
    for thisComponent in time_down_numComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "time_down_num" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials_8 = data.TrialHandler(nReps=time_dw, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_8')
    thisExp.addLoop(trials_8)  # add the loop to the experiment
    thisTrial_8 = trials_8.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_8.rgb)
    if thisTrial_8 != None:
        for paramName in thisTrial_8:
            exec('{} = thisTrial_8[paramName]'.format(paramName))
    
    for thisTrial_8 in trials_8:
        currentLoop = trials_8
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_8.rgb)
        if thisTrial_8 != None:
            for paramName in thisTrial_8:
                exec('{} = thisTrial_8[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "ph2v2test"-------
        continueRoutine = True
        routineTimer.add(4.500000)
        # update component parameters for each repeat
        image_29.setImage(student_IMG)
        image_30.setImage(ph2_stimuli)
        # keep track of which components have finished
        ph2v2testComponents = [image_29, text_27, text_24, text_26, image_30]
        for thisComponent in ph2v2testComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ph2v2testClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "ph2v2test"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = ph2v2testClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ph2v2testClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_29* updates
            if image_29.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                image_29.frameNStart = frameN  # exact frame index
                image_29.tStart = t  # local t and not account for scr refresh
                image_29.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_29, 'tStartRefresh')  # time at next scr refresh
                image_29.setAutoDraw(True)
            if image_29.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_29.tStartRefresh + 4.5-frameTolerance:
                    # keep track of stop time/frame for later
                    image_29.tStop = t  # not accounting for scr refresh
                    image_29.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_29, 'tStopRefresh')  # time at next scr refresh
                    image_29.setAutoDraw(False)
            
            # *text_27* updates
            if text_27.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                text_27.frameNStart = frameN  # exact frame index
                text_27.tStart = t  # local t and not account for scr refresh
                text_27.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_27, 'tStartRefresh')  # time at next scr refresh
                text_27.setAutoDraw(True)
            if text_27.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_27.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    text_27.tStop = t  # not accounting for scr refresh
                    text_27.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_27, 'tStopRefresh')  # time at next scr refresh
                    text_27.setAutoDraw(False)
            
            # *text_24* updates
            if text_24.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
                # keep track of start time/frame for later
                text_24.frameNStart = frameN  # exact frame index
                text_24.tStart = t  # local t and not account for scr refresh
                text_24.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_24, 'tStartRefresh')  # time at next scr refresh
                text_24.setAutoDraw(True)
            if text_24.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_24.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    text_24.tStop = t  # not accounting for scr refresh
                    text_24.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_24, 'tStopRefresh')  # time at next scr refresh
                    text_24.setAutoDraw(False)
            
            # *text_26* updates
            if text_26.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
                # keep track of start time/frame for later
                text_26.frameNStart = frameN  # exact frame index
                text_26.tStart = t  # local t and not account for scr refresh
                text_26.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_26, 'tStartRefresh')  # time at next scr refresh
                text_26.setAutoDraw(True)
            if text_26.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_26.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    text_26.tStop = t  # not accounting for scr refresh
                    text_26.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_26, 'tStopRefresh')  # time at next scr refresh
                    text_26.setAutoDraw(False)
            
            # *image_30* updates
            if image_30.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                image_30.frameNStart = frameN  # exact frame index
                image_30.tStart = t  # local t and not account for scr refresh
                image_30.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_30, 'tStartRefresh')  # time at next scr refresh
                image_30.setAutoDraw(True)
            if image_30.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_30.tStartRefresh + 4.5-frameTolerance:
                    # keep track of stop time/frame for later
                    image_30.tStop = t  # not accounting for scr refresh
                    image_30.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_30, 'tStopRefresh')  # time at next scr refresh
                    image_30.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ph2v2testComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "ph2v2test"-------
        for thisComponent in ph2v2testComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        time_dw -= 1
        trials_8.addData('image_29.started', image_29.tStartRefresh)
        trials_8.addData('image_29.stopped', image_29.tStopRefresh)
        trials_8.addData('text_27.started', text_27.tStartRefresh)
        trials_8.addData('text_27.stopped', text_27.tStopRefresh)
        trials_8.addData('text_24.started', text_24.tStartRefresh)
        trials_8.addData('text_24.stopped', text_24.tStopRefresh)
        trials_8.addData('text_26.started', text_26.tStartRefresh)
        trials_8.addData('text_26.stopped', text_26.tStopRefresh)
        trials_8.addData('image_30.started', image_30.tStartRefresh)
        trials_8.addData('image_30.stopped', image_30.tStopRefresh)
        thisExp.nextEntry()
        
    # completed time_dw repeats of 'trials_8'
    
    
    # ------Prepare to start Routine "ph2v2test_1"-------
    continueRoutine = True
    # update component parameters for each repeat
    startmoney=startmoney+elec_intensity
    
    money = '决策者的选择如下图，决策者累计获得奖励'+str(startmoney)+'元'
    image_31.setImage(student_IMG)
    image_32.setImage(ph2_stimuli_2)
    # setup some python lists for storing info about the mouse_13
    mouse_13.clicked_name = []
    gotValidClick = False  # until a click is received
    text_32.setText(money)
    # keep track of which components have finished
    ph2v2test_1Components = [image_31, image_32, image_33, mouse_13, text_32]
    for thisComponent in ph2v2test_1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ph2v2test_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ph2v2test_1"-------
    while continueRoutine:
        # get current time
        t = ph2v2test_1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ph2v2test_1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_31* updates
        if image_31.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            image_31.frameNStart = frameN  # exact frame index
            image_31.tStart = t  # local t and not account for scr refresh
            image_31.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_31, 'tStartRefresh')  # time at next scr refresh
            image_31.setAutoDraw(True)
        
        # *image_32* updates
        if image_32.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            image_32.frameNStart = frameN  # exact frame index
            image_32.tStart = t  # local t and not account for scr refresh
            image_32.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_32, 'tStartRefresh')  # time at next scr refresh
            image_32.setAutoDraw(True)
        
        # *image_33* updates
        if image_33.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            image_33.frameNStart = frameN  # exact frame index
            image_33.tStart = t  # local t and not account for scr refresh
            image_33.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_33, 'tStartRefresh')  # time at next scr refresh
            image_33.setAutoDraw(True)
        # *mouse_13* updates
        if mouse_13.status == NOT_STARTED and t >= 0-frameTolerance:
            # keep track of start time/frame for later
            mouse_13.frameNStart = frameN  # exact frame index
            mouse_13.tStart = t  # local t and not account for scr refresh
            mouse_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_13, 'tStartRefresh')  # time at next scr refresh
            mouse_13.status = STARTED
            mouse_13.mouseClock.reset()
            prevButtonState = mouse_13.getPressed()  # if button is down already this ISN'T a new click
        if mouse_13.status == STARTED:  # only update if started and not finished!
            buttons = mouse_13.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(image_33)
                        clickableList = image_33
                    except:
                        clickableList = [image_33]
                    for obj in clickableList:
                        if obj.contains(mouse_13):
                            gotValidClick = True
                            mouse_13.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *text_32* updates
        if text_32.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_32.frameNStart = frameN  # exact frame index
            text_32.tStart = t  # local t and not account for scr refresh
            text_32.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_32, 'tStartRefresh')  # time at next scr refresh
            text_32.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ph2v2test_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ph2v2test_1"-------
    for thisComponent in ph2v2test_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_6.addData('image_31.started', image_31.tStartRefresh)
    trials_6.addData('image_31.stopped', image_31.tStopRefresh)
    trials_6.addData('image_32.started', image_32.tStartRefresh)
    trials_6.addData('image_32.stopped', image_32.tStopRefresh)
    trials_6.addData('image_33.started', image_33.tStartRefresh)
    trials_6.addData('image_33.stopped', image_33.tStopRefresh)
    # store data for trials_6 (TrialHandler)
    x, y = mouse_13.getPos()
    buttons = mouse_13.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(image_33)
            clickableList = image_33
        except:
            clickableList = [image_33]
        for obj in clickableList:
            if obj.contains(mouse_13):
                gotValidClick = True
                mouse_13.clicked_name.append(obj.name)
    trials_6.addData('mouse_13.x', x)
    trials_6.addData('mouse_13.y', y)
    trials_6.addData('mouse_13.leftButton', buttons[0])
    trials_6.addData('mouse_13.midButton', buttons[1])
    trials_6.addData('mouse_13.rightButton', buttons[2])
    if len(mouse_13.clicked_name):
        trials_6.addData('mouse_13.clicked_name', mouse_13.clicked_name[0])
    trials_6.addData('mouse_13.started', mouse_13.tStart)
    trials_6.addData('mouse_13.stopped', mouse_13.tStop)
    trials_6.addData('text_32.started', text_32.tStartRefresh)
    trials_6.addData('text_32.stopped', text_32.tStopRefresh)
    # the Routine "ph2v2test_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_6'


# ------Prepare to start Routine "ph2scaleintro"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_16
mouse_16.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
ph2scaleintroComponents = [text_21, image_nextbutton_4, mouse_16]
for thisComponent in ph2scaleintroComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ph2scaleintroClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "ph2scaleintro"-------
while continueRoutine:
    # get current time
    t = ph2scaleintroClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ph2scaleintroClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_21* updates
    if text_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_21.frameNStart = frameN  # exact frame index
        text_21.tStart = t  # local t and not account for scr refresh
        text_21.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_21, 'tStartRefresh')  # time at next scr refresh
        text_21.setAutoDraw(True)
    
    # *image_nextbutton_4* updates
    if image_nextbutton_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_nextbutton_4.frameNStart = frameN  # exact frame index
        image_nextbutton_4.tStart = t  # local t and not account for scr refresh
        image_nextbutton_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_nextbutton_4, 'tStartRefresh')  # time at next scr refresh
        image_nextbutton_4.setAutoDraw(True)
    # *mouse_16* updates
    if mouse_16.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_16.frameNStart = frameN  # exact frame index
        mouse_16.tStart = t  # local t and not account for scr refresh
        mouse_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_16, 'tStartRefresh')  # time at next scr refresh
        mouse_16.status = STARTED
        mouse_16.mouseClock.reset()
        prevButtonState = mouse_16.getPressed()  # if button is down already this ISN'T a new click
    if mouse_16.status == STARTED:  # only update if started and not finished!
        buttons = mouse_16.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(image_nextbutton_4)
                    clickableList = image_nextbutton_4
                except:
                    clickableList = [image_nextbutton_4]
                for obj in clickableList:
                    if obj.contains(mouse_16):
                        gotValidClick = True
                        mouse_16.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ph2scaleintroComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ph2scaleintro"-------
for thisComponent in ph2scaleintroComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_21.started', text_21.tStartRefresh)
thisExp.addData('text_21.stopped', text_21.tStopRefresh)
thisExp.addData('image_nextbutton_4.started', image_nextbutton_4.tStartRefresh)
thisExp.addData('image_nextbutton_4.stopped', image_nextbutton_4.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_16.getPos()
buttons = mouse_16.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(image_nextbutton_4)
        clickableList = image_nextbutton_4
    except:
        clickableList = [image_nextbutton_4]
    for obj in clickableList:
        if obj.contains(mouse_16):
            gotValidClick = True
            mouse_16.clicked_name.append(obj.name)
thisExp.addData('mouse_16.x', x)
thisExp.addData('mouse_16.y', y)
thisExp.addData('mouse_16.leftButton', buttons[0])
thisExp.addData('mouse_16.midButton', buttons[1])
thisExp.addData('mouse_16.rightButton', buttons[2])
if len(mouse_16.clicked_name):
    thisExp.addData('mouse_16.clicked_name', mouse_16.clicked_name[0])
thisExp.addData('mouse_16.started', mouse_16.tStart)
thisExp.addData('mouse_16.stopped', mouse_16.tStop)
thisExp.nextEntry()
# the Routine "ph2scaleintro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_4 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond/ph2scales.xlsx'),
    seed=None, name='trials_4')
thisExp.addLoop(trials_4)  # add the loop to the experiment
thisTrial_4 = trials_4.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_4.rgb)
if thisTrial_4 != None:
    for paramName in thisTrial_4:
        exec('{} = thisTrial_4[paramName]'.format(paramName))

for thisTrial_4 in trials_4:
    currentLoop = trials_4
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_4.rgb)
    if thisTrial_4 != None:
        for paramName in thisTrial_4:
            exec('{} = thisTrial_4[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "ph2scales"-------
    continueRoutine = True
    # update component parameters for each repeat
    slider_5.reset()
    image_18.setImage(scales)
    # setup some python lists for storing info about the mouse_19
    mouse_19.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    ph2scalesComponents = [slider_5, image_18, text_20, image_45, mouse_19]
    for thisComponent in ph2scalesComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ph2scalesClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ph2scales"-------
    while continueRoutine:
        # get current time
        t = ph2scalesClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ph2scalesClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *slider_5* updates
        if slider_5.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            slider_5.frameNStart = frameN  # exact frame index
            slider_5.tStart = t  # local t and not account for scr refresh
            slider_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_5, 'tStartRefresh')  # time at next scr refresh
            slider_5.setAutoDraw(True)
        
        # *image_18* updates
        if image_18.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            image_18.frameNStart = frameN  # exact frame index
            image_18.tStart = t  # local t and not account for scr refresh
            image_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_18, 'tStartRefresh')  # time at next scr refresh
            image_18.setAutoDraw(True)
        
        # *text_20* updates
        if text_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_20.frameNStart = frameN  # exact frame index
            text_20.tStart = t  # local t and not account for scr refresh
            text_20.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_20, 'tStartRefresh')  # time at next scr refresh
            text_20.setAutoDraw(True)
        if text_20.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_20.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_20.tStop = t  # not accounting for scr refresh
                text_20.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_20, 'tStopRefresh')  # time at next scr refresh
                text_20.setAutoDraw(False)
        
        # *image_45* updates
        if image_45.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
            # keep track of start time/frame for later
            image_45.frameNStart = frameN  # exact frame index
            image_45.tStart = t  # local t and not account for scr refresh
            image_45.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_45, 'tStartRefresh')  # time at next scr refresh
            image_45.setAutoDraw(True)
        # *mouse_19* updates
        if mouse_19.status == NOT_STARTED and t >= 3-frameTolerance:
            # keep track of start time/frame for later
            mouse_19.frameNStart = frameN  # exact frame index
            mouse_19.tStart = t  # local t and not account for scr refresh
            mouse_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_19, 'tStartRefresh')  # time at next scr refresh
            mouse_19.status = STARTED
            mouse_19.mouseClock.reset()
            prevButtonState = mouse_19.getPressed()  # if button is down already this ISN'T a new click
        if mouse_19.status == STARTED:  # only update if started and not finished!
            buttons = mouse_19.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(image_45)
                        clickableList = image_45
                    except:
                        clickableList = [image_45]
                    for obj in clickableList:
                        if obj.contains(mouse_19):
                            gotValidClick = True
                            mouse_19.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ph2scalesComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ph2scales"-------
    for thisComponent in ph2scalesComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_4.addData('slider_5.response', slider_5.getRating())
    trials_4.addData('slider_5.rt', slider_5.getRT())
    trials_4.addData('slider_5.started', slider_5.tStartRefresh)
    trials_4.addData('slider_5.stopped', slider_5.tStopRefresh)
    trials_4.addData('image_18.started', image_18.tStartRefresh)
    trials_4.addData('image_18.stopped', image_18.tStopRefresh)
    trials_4.addData('text_20.started', text_20.tStartRefresh)
    trials_4.addData('text_20.stopped', text_20.tStopRefresh)
    trials_4.addData('image_45.started', image_45.tStartRefresh)
    trials_4.addData('image_45.stopped', image_45.tStopRefresh)
    # store data for trials_4 (TrialHandler)
    x, y = mouse_19.getPos()
    buttons = mouse_19.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(image_45)
            clickableList = image_45
        except:
            clickableList = [image_45]
        for obj in clickableList:
            if obj.contains(mouse_19):
                gotValidClick = True
                mouse_19.clicked_name.append(obj.name)
    trials_4.addData('mouse_19.x', x)
    trials_4.addData('mouse_19.y', y)
    trials_4.addData('mouse_19.leftButton', buttons[0])
    trials_4.addData('mouse_19.midButton', buttons[1])
    trials_4.addData('mouse_19.rightButton', buttons[2])
    if len(mouse_19.clicked_name):
        trials_4.addData('mouse_19.clicked_name', mouse_19.clicked_name[0])
    trials_4.addData('mouse_19.started', mouse_19.tStart)
    trials_4.addData('mouse_19.stopped', mouse_19.tStop)
    # the Routine "ph2scales" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_4'


# ------Prepare to start Routine "PHASE3instr"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_17
mouse_17.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
PHASE3instrComponents = [image_27, image_34, mouse_17]
for thisComponent in PHASE3instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
PHASE3instrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "PHASE3instr"-------
while continueRoutine:
    # get current time
    t = PHASE3instrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=PHASE3instrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_27* updates
    if image_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_27.frameNStart = frameN  # exact frame index
        image_27.tStart = t  # local t and not account for scr refresh
        image_27.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_27, 'tStartRefresh')  # time at next scr refresh
        image_27.setAutoDraw(True)
    
    # *image_34* updates
    if image_34.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        image_34.frameNStart = frameN  # exact frame index
        image_34.tStart = t  # local t and not account for scr refresh
        image_34.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_34, 'tStartRefresh')  # time at next scr refresh
        image_34.setAutoDraw(True)
    # *mouse_17* updates
    if mouse_17.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_17.frameNStart = frameN  # exact frame index
        mouse_17.tStart = t  # local t and not account for scr refresh
        mouse_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_17, 'tStartRefresh')  # time at next scr refresh
        mouse_17.status = STARTED
        mouse_17.mouseClock.reset()
        prevButtonState = mouse_17.getPressed()  # if button is down already this ISN'T a new click
    if mouse_17.status == STARTED:  # only update if started and not finished!
        buttons = mouse_17.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(image_34)
                    clickableList = image_34
                except:
                    clickableList = [image_34]
                for obj in clickableList:
                    if obj.contains(mouse_17):
                        gotValidClick = True
                        mouse_17.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PHASE3instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "PHASE3instr"-------
for thisComponent in PHASE3instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_27.started', image_27.tStartRefresh)
thisExp.addData('image_27.stopped', image_27.tStopRefresh)
thisExp.addData('image_34.started', image_34.tStartRefresh)
thisExp.addData('image_34.stopped', image_34.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_17.getPos()
buttons = mouse_17.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(image_34)
        clickableList = image_34
    except:
        clickableList = [image_34]
    for obj in clickableList:
        if obj.contains(mouse_17):
            gotValidClick = True
            mouse_17.clicked_name.append(obj.name)
thisExp.addData('mouse_17.x', x)
thisExp.addData('mouse_17.y', y)
thisExp.addData('mouse_17.leftButton', buttons[0])
thisExp.addData('mouse_17.midButton', buttons[1])
thisExp.addData('mouse_17.rightButton', buttons[2])
if len(mouse_17.clicked_name):
    thisExp.addData('mouse_17.clicked_name', mouse_17.clicked_name[0])
thisExp.addData('mouse_17.started', mouse_17.tStart)
thisExp.addData('mouse_17.stopped', mouse_17.tStop)
thisExp.nextEntry()
# the Routine "PHASE3instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_12 = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond/PHASE3intro_2_cond.xlsx'),
    seed=None, name='trials_12')
thisExp.addLoop(trials_12)  # add the loop to the experiment
thisTrial_12 = trials_12.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_12.rgb)
if thisTrial_12 != None:
    for paramName in thisTrial_12:
        exec('{} = thisTrial_12[paramName]'.format(paramName))

for thisTrial_12 in trials_12:
    currentLoop = trials_12
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_12.rgb)
    if thisTrial_12 != None:
        for paramName in thisTrial_12:
            exec('{} = thisTrial_12[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "PHASE3instr_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_43.setText(text_right)
    text_42.setText(text_left)
    image_37.setImage(ph3intro_2)
    image_38.setImage(button_ph3intro_2)
    # setup some python lists for storing info about the mouse_18
    mouse_18.clicked_name = []
    gotValidClick = False  # until a click is received
    image_43.setImage(ph3intro_2_personleftimg)
    image_44.setImage(ph3intro_2_personrightimg)
    # keep track of which components have finished
    PHASE3instr_2Components = [text_43, text_42, image_37, image_38, mouse_18, image_43, image_44]
    for thisComponent in PHASE3instr_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    PHASE3instr_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "PHASE3instr_2"-------
    while continueRoutine:
        # get current time
        t = PHASE3instr_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=PHASE3instr_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_43* updates
        if text_43.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_43.frameNStart = frameN  # exact frame index
            text_43.tStart = t  # local t and not account for scr refresh
            text_43.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_43, 'tStartRefresh')  # time at next scr refresh
            text_43.setAutoDraw(True)
        
        # *text_42* updates
        if text_42.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_42.frameNStart = frameN  # exact frame index
            text_42.tStart = t  # local t and not account for scr refresh
            text_42.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_42, 'tStartRefresh')  # time at next scr refresh
            text_42.setAutoDraw(True)
        
        # *image_37* updates
        if image_37.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_37.frameNStart = frameN  # exact frame index
            image_37.tStart = t  # local t and not account for scr refresh
            image_37.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_37, 'tStartRefresh')  # time at next scr refresh
            image_37.setAutoDraw(True)
        
        # *image_38* updates
        if image_38.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_38.frameNStart = frameN  # exact frame index
            image_38.tStart = t  # local t and not account for scr refresh
            image_38.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_38, 'tStartRefresh')  # time at next scr refresh
            image_38.setAutoDraw(True)
        # *mouse_18* updates
        if mouse_18.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_18.frameNStart = frameN  # exact frame index
            mouse_18.tStart = t  # local t and not account for scr refresh
            mouse_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_18, 'tStartRefresh')  # time at next scr refresh
            mouse_18.status = STARTED
            mouse_18.mouseClock.reset()
            prevButtonState = mouse_18.getPressed()  # if button is down already this ISN'T a new click
        if mouse_18.status == STARTED:  # only update if started and not finished!
            buttons = mouse_18.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(image_38)
                        clickableList = image_38
                    except:
                        clickableList = [image_38]
                    for obj in clickableList:
                        if obj.contains(mouse_18):
                            gotValidClick = True
                            mouse_18.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *image_43* updates
        if image_43.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_43.frameNStart = frameN  # exact frame index
            image_43.tStart = t  # local t and not account for scr refresh
            image_43.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_43, 'tStartRefresh')  # time at next scr refresh
            image_43.setAutoDraw(True)
        
        # *image_44* updates
        if image_44.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_44.frameNStart = frameN  # exact frame index
            image_44.tStart = t  # local t and not account for scr refresh
            image_44.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_44, 'tStartRefresh')  # time at next scr refresh
            image_44.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in PHASE3instr_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "PHASE3instr_2"-------
    for thisComponent in PHASE3instr_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_12.addData('text_43.started', text_43.tStartRefresh)
    trials_12.addData('text_43.stopped', text_43.tStopRefresh)
    trials_12.addData('text_42.started', text_42.tStartRefresh)
    trials_12.addData('text_42.stopped', text_42.tStopRefresh)
    trials_12.addData('image_37.started', image_37.tStartRefresh)
    trials_12.addData('image_37.stopped', image_37.tStopRefresh)
    trials_12.addData('image_38.started', image_38.tStartRefresh)
    trials_12.addData('image_38.stopped', image_38.tStopRefresh)
    # store data for trials_12 (TrialHandler)
    x, y = mouse_18.getPos()
    buttons = mouse_18.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(image_38)
            clickableList = image_38
        except:
            clickableList = [image_38]
        for obj in clickableList:
            if obj.contains(mouse_18):
                gotValidClick = True
                mouse_18.clicked_name.append(obj.name)
    trials_12.addData('mouse_18.x', x)
    trials_12.addData('mouse_18.y', y)
    trials_12.addData('mouse_18.leftButton', buttons[0])
    trials_12.addData('mouse_18.midButton', buttons[1])
    trials_12.addData('mouse_18.rightButton', buttons[2])
    if len(mouse_18.clicked_name):
        trials_12.addData('mouse_18.clicked_name', mouse_18.clicked_name[0])
    trials_12.addData('mouse_18.started', mouse_18.tStart)
    trials_12.addData('mouse_18.stopped', mouse_18.tStop)
    trials_12.addData('image_43.started', image_43.tStartRefresh)
    trials_12.addData('image_43.stopped', image_43.tStopRefresh)
    trials_12.addData('image_44.started', image_44.tStartRefresh)
    trials_12.addData('image_44.stopped', image_44.tStopRefresh)
    # the Routine "PHASE3instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_12'


# set up handler to look after randomisation of conditions etc
trials_14 = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond/PHASE3intro_3_cond.xlsx'),
    seed=None, name='trials_14')
thisExp.addLoop(trials_14)  # add the loop to the experiment
thisTrial_14 = trials_14.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_14.rgb)
if thisTrial_14 != None:
    for paramName in thisTrial_14:
        exec('{} = thisTrial_14[paramName]'.format(paramName))

for thisTrial_14 in trials_14:
    currentLoop = trials_14
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_14.rgb)
    if thisTrial_14 != None:
        for paramName in thisTrial_14:
            exec('{} = thisTrial_14[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "PHASE3intr_3"-------
    continueRoutine = True
    # update component parameters for each repeat
    image_48.setImage(ph3intro_3)
    image_49.setImage(button_ph3intro_3)
    image_50.setImage(ph3intro_3_personleftimg)
    image_51.setImage(ph3intro_3_personrightimg)
    text_44.setText(text_right_2)
    text_45.setText(text_left_2)
    # setup some python lists for storing info about the mouse_21
    mouse_21.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    PHASE3intr_3Components = [image_48, image_49, image_50, image_51, text_44, text_45, mouse_21]
    for thisComponent in PHASE3intr_3Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    PHASE3intr_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "PHASE3intr_3"-------
    while continueRoutine:
        # get current time
        t = PHASE3intr_3Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=PHASE3intr_3Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_48* updates
        if image_48.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_48.frameNStart = frameN  # exact frame index
            image_48.tStart = t  # local t and not account for scr refresh
            image_48.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_48, 'tStartRefresh')  # time at next scr refresh
            image_48.setAutoDraw(True)
        
        # *image_49* updates
        if image_49.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_49.frameNStart = frameN  # exact frame index
            image_49.tStart = t  # local t and not account for scr refresh
            image_49.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_49, 'tStartRefresh')  # time at next scr refresh
            image_49.setAutoDraw(True)
        
        # *image_50* updates
        if image_50.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_50.frameNStart = frameN  # exact frame index
            image_50.tStart = t  # local t and not account for scr refresh
            image_50.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_50, 'tStartRefresh')  # time at next scr refresh
            image_50.setAutoDraw(True)
        
        # *image_51* updates
        if image_51.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_51.frameNStart = frameN  # exact frame index
            image_51.tStart = t  # local t and not account for scr refresh
            image_51.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_51, 'tStartRefresh')  # time at next scr refresh
            image_51.setAutoDraw(True)
        
        # *text_44* updates
        if text_44.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_44.frameNStart = frameN  # exact frame index
            text_44.tStart = t  # local t and not account for scr refresh
            text_44.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_44, 'tStartRefresh')  # time at next scr refresh
            text_44.setAutoDraw(True)
        
        # *text_45* updates
        if text_45.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_45.frameNStart = frameN  # exact frame index
            text_45.tStart = t  # local t and not account for scr refresh
            text_45.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_45, 'tStartRefresh')  # time at next scr refresh
            text_45.setAutoDraw(True)
        # *mouse_21* updates
        if mouse_21.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_21.frameNStart = frameN  # exact frame index
            mouse_21.tStart = t  # local t and not account for scr refresh
            mouse_21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_21, 'tStartRefresh')  # time at next scr refresh
            mouse_21.status = STARTED
            mouse_21.mouseClock.reset()
            prevButtonState = mouse_21.getPressed()  # if button is down already this ISN'T a new click
        if mouse_21.status == STARTED:  # only update if started and not finished!
            buttons = mouse_21.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(image_49)
                        clickableList = image_49
                    except:
                        clickableList = [image_49]
                    for obj in clickableList:
                        if obj.contains(mouse_21):
                            gotValidClick = True
                            mouse_21.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in PHASE3intr_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "PHASE3intr_3"-------
    for thisComponent in PHASE3intr_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_14.addData('image_48.started', image_48.tStartRefresh)
    trials_14.addData('image_48.stopped', image_48.tStopRefresh)
    trials_14.addData('image_49.started', image_49.tStartRefresh)
    trials_14.addData('image_49.stopped', image_49.tStopRefresh)
    trials_14.addData('image_50.started', image_50.tStartRefresh)
    trials_14.addData('image_50.stopped', image_50.tStopRefresh)
    trials_14.addData('image_51.started', image_51.tStartRefresh)
    trials_14.addData('image_51.stopped', image_51.tStopRefresh)
    trials_14.addData('text_44.started', text_44.tStartRefresh)
    trials_14.addData('text_44.stopped', text_44.tStopRefresh)
    trials_14.addData('text_45.started', text_45.tStartRefresh)
    trials_14.addData('text_45.stopped', text_45.tStopRefresh)
    # store data for trials_14 (TrialHandler)
    x, y = mouse_21.getPos()
    buttons = mouse_21.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        try:
            iter(image_49)
            clickableList = image_49
        except:
            clickableList = [image_49]
        for obj in clickableList:
            if obj.contains(mouse_21):
                gotValidClick = True
                mouse_21.clicked_name.append(obj.name)
    trials_14.addData('mouse_21.x', x)
    trials_14.addData('mouse_21.y', y)
    trials_14.addData('mouse_21.leftButton', buttons[0])
    trials_14.addData('mouse_21.midButton', buttons[1])
    trials_14.addData('mouse_21.rightButton', buttons[2])
    if len(mouse_21.clicked_name):
        trials_14.addData('mouse_21.clicked_name', mouse_21.clicked_name[0])
    trials_14.addData('mouse_21.started', mouse_21.tStart)
    trials_14.addData('mouse_21.stopped', mouse_21.tStop)
    # the Routine "PHASE3intr_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_14'


# ------Prepare to start Routine "ph3_prequestion"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_23
mouse_23.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
ph3_prequestionComponents = [image_53, image_54, mouse_23]
for thisComponent in ph3_prequestionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ph3_prequestionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "ph3_prequestion"-------
while continueRoutine:
    # get current time
    t = ph3_prequestionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ph3_prequestionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_53* updates
    if image_53.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_53.frameNStart = frameN  # exact frame index
        image_53.tStart = t  # local t and not account for scr refresh
        image_53.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_53, 'tStartRefresh')  # time at next scr refresh
        image_53.setAutoDraw(True)
    
    # *image_54* updates
    if image_54.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_54.frameNStart = frameN  # exact frame index
        image_54.tStart = t  # local t and not account for scr refresh
        image_54.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_54, 'tStartRefresh')  # time at next scr refresh
        image_54.setAutoDraw(True)
    # *mouse_23* updates
    if mouse_23.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_23.frameNStart = frameN  # exact frame index
        mouse_23.tStart = t  # local t and not account for scr refresh
        mouse_23.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_23, 'tStartRefresh')  # time at next scr refresh
        mouse_23.status = STARTED
        mouse_23.mouseClock.reset()
        prevButtonState = mouse_23.getPressed()  # if button is down already this ISN'T a new click
    if mouse_23.status == STARTED:  # only update if started and not finished!
        buttons = mouse_23.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(image_54)
                    clickableList = image_54
                except:
                    clickableList = [image_54]
                for obj in clickableList:
                    if obj.contains(mouse_23):
                        gotValidClick = True
                        mouse_23.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ph3_prequestionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ph3_prequestion"-------
for thisComponent in ph3_prequestionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_53.started', image_53.tStartRefresh)
thisExp.addData('image_53.stopped', image_53.tStopRefresh)
thisExp.addData('image_54.started', image_54.tStartRefresh)
thisExp.addData('image_54.stopped', image_54.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouse_23.getPos()
buttons = mouse_23.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(image_54)
        clickableList = image_54
    except:
        clickableList = [image_54]
    for obj in clickableList:
        if obj.contains(mouse_23):
            gotValidClick = True
            mouse_23.clicked_name.append(obj.name)
thisExp.addData('mouse_23.x', x)
thisExp.addData('mouse_23.y', y)
thisExp.addData('mouse_23.leftButton', buttons[0])
thisExp.addData('mouse_23.midButton', buttons[1])
thisExp.addData('mouse_23.rightButton', buttons[2])
if len(mouse_23.clicked_name):
    thisExp.addData('mouse_23.clicked_name', mouse_23.clicked_name[0])
thisExp.addData('mouse_23.started', mouse_23.tStart)
thisExp.addData('mouse_23.stopped', mouse_23.tStop)
thisExp.nextEntry()
# the Routine "ph3_prequestion" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond/TD_cond0922.xlsx'),
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Ph3"-------
    continueRoutine = True
    # update component parameters for each repeat
    #shuffle(list_day)
    #week number = index
    if list_pic1.index(pic_loc1) != list_pic2.index(pic_loc2):
        cnt += 1
        #not in = not repeat
        if pic_loc1 not in list_pic:
            #temp_day1 = (list_pic1.index(pic_loc1)*7) + list_day[0]
            temp_day1 = list_pic1.index(pic_loc1) + 1
            list_pic.append(pic_loc1)
            list_pic_days.append(temp_day1)
        else:
            temp_day1 = list_pic_days[list_pic.index(pic_loc1)]
        if pic_loc2 not in list_pic:
            temp_day2 = list_pic2.index(pic_loc2) + 1
            list_pic.append(pic_loc2)
            list_pic_days.append(temp_day2)
        else:
            temp_day2 = list_pic_days[list_pic.index(pic_loc2)]
    else:
        continueRoutine = False
    day_num1 = str(temp_day1) + '周'
    day_num2 = str(temp_day2) + '周'
    
    print(list_pic_days,'list_pic_days')
    image_19.setImage(pic_loc1)
    image_21.setImage(pic_loc2)
    text_16.setText(day_num1)
    text_17.setText(day_num2)
    # setup some python lists for storing info about the mouse_10
    mouse_10.x = []
    mouse_10.y = []
    mouse_10.leftButton = []
    mouse_10.midButton = []
    mouse_10.rightButton = []
    mouse_10.time = []
    mouse_10.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    Ph3Components = [image_ph3instr, image_19, image_21, text_16, text_17, mouse_10, text_22]
    for thisComponent in Ph3Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Ph3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Ph3"-------
    while continueRoutine:
        # get current time
        t = Ph3Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Ph3Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_ph3instr* updates
        if image_ph3instr.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            image_ph3instr.frameNStart = frameN  # exact frame index
            image_ph3instr.tStart = t  # local t and not account for scr refresh
            image_ph3instr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_ph3instr, 'tStartRefresh')  # time at next scr refresh
            image_ph3instr.setAutoDraw(True)
        
        # *image_19* updates
        if image_19.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            image_19.frameNStart = frameN  # exact frame index
            image_19.tStart = t  # local t and not account for scr refresh
            image_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_19, 'tStartRefresh')  # time at next scr refresh
            image_19.setAutoDraw(True)
        
        # *image_21* updates
        if image_21.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            image_21.frameNStart = frameN  # exact frame index
            image_21.tStart = t  # local t and not account for scr refresh
            image_21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_21, 'tStartRefresh')  # time at next scr refresh
            image_21.setAutoDraw(True)
        
        # *text_16* updates
        if text_16.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            text_16.frameNStart = frameN  # exact frame index
            text_16.tStart = t  # local t and not account for scr refresh
            text_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_16, 'tStartRefresh')  # time at next scr refresh
            text_16.setAutoDraw(True)
        
        # *text_17* updates
        if text_17.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            text_17.frameNStart = frameN  # exact frame index
            text_17.tStart = t  # local t and not account for scr refresh
            text_17.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
            text_17.setAutoDraw(True)
        # *mouse_10* updates
        if mouse_10.status == NOT_STARTED and tThisFlip >= 2.05-frameTolerance:
            # keep track of start time/frame for later
            mouse_10.frameNStart = frameN  # exact frame index
            mouse_10.tStart = t  # local t and not account for scr refresh
            mouse_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_10, 'tStartRefresh')  # time at next scr refresh
            mouse_10.status = STARTED
            mouse_10.mouseClock.reset()
            prevButtonState = mouse_10.getPressed()  # if button is down already this ISN'T a new click
        if mouse_10.status == STARTED:  # only update if started and not finished!
            buttons = mouse_10.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter([image_19,image_21])
                        clickableList = [image_19,image_21]
                    except:
                        clickableList = [[image_19,image_21]]
                    for obj in clickableList:
                        if obj.contains(mouse_10):
                            gotValidClick = True
                            mouse_10.clicked_name.append(obj.name)
                    x, y = mouse_10.getPos()
                    mouse_10.x.append(x)
                    mouse_10.y.append(y)
                    buttons = mouse_10.getPressed()
                    mouse_10.leftButton.append(buttons[0])
                    mouse_10.midButton.append(buttons[1])
                    mouse_10.rightButton.append(buttons[2])
                    mouse_10.time.append(mouse_10.mouseClock.getTime())
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *text_22* updates
        if text_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_22.frameNStart = frameN  # exact frame index
            text_22.tStart = t  # local t and not account for scr refresh
            text_22.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_22, 'tStartRefresh')  # time at next scr refresh
            text_22.setAutoDraw(True)
        if text_22.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_22.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                text_22.tStop = t  # not accounting for scr refresh
                text_22.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_22, 'tStopRefresh')  # time at next scr refresh
                text_22.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Ph3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Ph3"-------
    for thisComponent in Ph3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('day_num1',temp_day1)
    thisExp.addData('day_num2',temp_day2)
    thisExp.addData('cnt',cnt)
    
    trials_2.addData('image_ph3instr.started', image_ph3instr.tStartRefresh)
    trials_2.addData('image_ph3instr.stopped', image_ph3instr.tStopRefresh)
    trials_2.addData('image_19.started', image_19.tStartRefresh)
    trials_2.addData('image_19.stopped', image_19.tStopRefresh)
    trials_2.addData('image_21.started', image_21.tStartRefresh)
    trials_2.addData('image_21.stopped', image_21.tStopRefresh)
    trials_2.addData('text_16.started', text_16.tStartRefresh)
    trials_2.addData('text_16.stopped', text_16.tStopRefresh)
    trials_2.addData('text_17.started', text_17.tStartRefresh)
    trials_2.addData('text_17.stopped', text_17.tStopRefresh)
    # store data for trials_2 (TrialHandler)
    if len(mouse_10.x): trials_2.addData('mouse_10.x', mouse_10.x[0])
    if len(mouse_10.y): trials_2.addData('mouse_10.y', mouse_10.y[0])
    if len(mouse_10.leftButton): trials_2.addData('mouse_10.leftButton', mouse_10.leftButton[0])
    if len(mouse_10.midButton): trials_2.addData('mouse_10.midButton', mouse_10.midButton[0])
    if len(mouse_10.rightButton): trials_2.addData('mouse_10.rightButton', mouse_10.rightButton[0])
    if len(mouse_10.time): trials_2.addData('mouse_10.time', mouse_10.time[0])
    if len(mouse_10.clicked_name): trials_2.addData('mouse_10.clicked_name', mouse_10.clicked_name[0])
    trials_2.addData('mouse_10.started', mouse_10.tStartRefresh)
    trials_2.addData('mouse_10.stopped', mouse_10.tStopRefresh)
    trials_2.addData('text_22.started', text_22.tStartRefresh)
    trials_2.addData('text_22.stopped', text_22.tStopRefresh)
    # the Routine "Ph3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_2'


# ------Prepare to start Routine "stop"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
# keep track of which components have finished
stopComponents = [text_stop]
for thisComponent in stopComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
stopClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "stop"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = stopClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=stopClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_stop* updates
    if text_stop.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_stop.frameNStart = frameN  # exact frame index
        text_stop.tStart = t  # local t and not account for scr refresh
        text_stop.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_stop, 'tStartRefresh')  # time at next scr refresh
        text_stop.setAutoDraw(True)
    if text_stop.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_stop.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            text_stop.tStop = t  # not accounting for scr refresh
            text_stop.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_stop, 'tStopRefresh')  # time at next scr refresh
            text_stop.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in stopComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "stop"-------
for thisComponent in stopComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_stop.started', text_stop.tStartRefresh)
thisExp.addData('text_stop.stopped', text_stop.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
