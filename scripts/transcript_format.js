const fs = require('fs')
const path = require('path')

let text = `00:21
I am Dr. Eswar working as assistant professor in the department of civil
00:24
engineering and also associated with the interdisciplinary program on climate studies
00:29
at Indian Institute of Technology Bombay. So, what are we going to see in this course?
00:34
Remote sensing is a fast emerging technology in the last few decades, it has grown tremendously.
00:40
In this particular course we are going to see what are the basic physical principles behind remote
00:46
sensing especially in the optical and thermal domains. We will also be able to understand the
00:53
different terminologies associated with remote sensing, what are the different satellite data
00:58
sets available to us and what those satellite data sets contain and finally we will also get to know
01:05
or get introduced to few applications of remote sensing at the end of this course.
01:11
So, even though this lectures will be as self-contained as possible for your own
01:16
understanding and appreciation I would suggest few text books for you all to go through. Like
01:21
some of the textbooks are Remote sensing of the environment an Earth Resource Perspective by
01:27
John Jensen, the classical textbook remote sensing and image interpretation by Lillesand and Kiefer,
01:34
physical principles of remote sensing by W.G Rees
01:37
and the fundamentals of remote sensing by Dr. Joseph and Jeganathan.
01:43
So, if you want to get like a basic introduction to the concepts
01:47
then the textbook by Lillesand and Kiefer and Jensen would be like the best suggested ones.
01:52
If you want to understand the physical principles or go little bit deeper into
01:56
the concepts I would suggest you to look at the textbooks by Joseph and Jeganathan and W. G Rees.
02:03
What exactly remote sensing is? Normally when we look at our newspapers we will see like
02:09
this is the image the cloud image for today or in TV they will say like they will show an image
02:14
like a India map and they will tell okay a cyclone is approaching, the cyclone is headed towards
02:20
Vizag coast, the cyclone is headed towards Odisha. All these things they will say.
02:25
And we will be like recognizing it as a satellite image, that is true it is like a satellite image
02:30
processed to some degree. So, just by looking at the image what we will be able to do,
02:36
we will see okay there is a cyclone here and the path of the cyclone is moving like this,
02:40
all such information we will get by seeing those images taken from the satellites.
02:45
Exactly that is what remote sensing is as a basic definition.
02:49
So, remote sensing is a technology in which
02:52
we obtain information about some feature or a phenomenon on the earth surface
02:58
through data collection and analysis in which the data is collected in a non-contact manner
03:05
or without being in physical contact with the object of our interest.
03:10
So, one of the best example of remote sensing what we do in normal life is our own vision.
03:16
Like whatever objects we see, we see the objects from a distance. We use the natural light coming
03:22
from the sun or we use some artificial light source like bulbs or something, which falls on the
03:26
object and the object will reflect light and our eyes will receive it and we will see okay there
03:32
is a table in front of me, the door is in that direction I should enter through the door. So,
03:37
all these kinds of processing we do unknowingly through the data we collected through our eyes.
03:43
So, our eyes act as a sensor in that sense and our brain is the data processor. So, remote sensing
03:49
is essentially a data acquisition technology which we can use for various applications.
03:56
As I said before remote sensing occurs in nature itself,
04:01
the process of human vision not only human the vision of all animals
04:05
is exactly is an example for remote sensing, whatever we see we see it from a distance.
04:11
The sound we hear say for example if a baby is sleeping in the
04:17
bedroom and we are sitting in the living room if the baby suddenly wakes up and cries
04:21
we hear it from a distance and we enter the room take the baby and pat it. So, this
04:26
information collection okay the baby has woken up and it is like crying now, that information
04:31
collection happens remotely. So, the process of our hearing is an example for remote sensing.
04:37
So, not only this like even bats when they fly they avoid obstacles by sending ultrasonic waves
04:45
and hearing the reflection back they avoid obstacles and move away from it.
04:50
These are all examples of remote sensing which occurs in nature. So, the technology that we are
04:55
going to learn in this course is an extension of this natural process to study earth and various
05:01
features associated with earth. Truly speaking remote sensing is not restricted only to earth,
05:08
remote sensing can be carried out in even in like for planets and solar system and far beyond.
05:14
People are doing it. But in this particular course we will be concentrating on remote sensing of
05:20
earth's surface and its applications. We won’t be looking on remote sensing of other planets.
05:25
So, this is a typical remote sensing system. So, what a remote sensing system consists of?
05:31
We will always take an analogy with the process of human vision and then we will learn this. So,
05:38
for remote sensing to occur, first there should be an object of interest. Let us say
05:44
the object of interest here is marked as point C,
05:48
this is the object of our interest. So, in order for us to see that particular
05:53
object we need some light source. And that light source during day time it is the sun
05:58
or if we are within our rooms it is the bulbs that we use. So, we need a source of energy that
06:05
gives that transmits energy towards the object of interest ok. So, this is the object of interest.
06:17
What happens then, the source of energy transmits some energy towards the object,
06:22
it gets reflected by the object of interest and come towards the sensor.
06:26
Say if you take analogy of human vision the sensor is eye, our human eyes or if you take
06:32
our normal remote sensing the sensor is the sensor located in a satellite. So, this energy
06:38
is reflected back or emitted whatever we will see it later these terms in detail.
06:43
So, the reflected energy goes towards the sensor and the sensor collects it.
06:48
So, now the sensor will transmit the data back to earth. So, this is known as data transmission
06:57
and this transmitted data will be stored most likely in form of images most likely like
07:05
there are other ways of processing and storing remote sensing data but mostly we are used to
07:10
seeing satellite images and working with it and the final step is application of this data.
07:22
So, I just go back to the previous slide. The object of interest is here and sun is there to
07:30
provide energy. Our eye acts as the sensor so, the brain acts as the data processor and then
07:41
our brain takes decision based on whatever happens. So, the data transmission happens
07:46
in this particular way like between the eyes and the brain the data transmission occurs. So, this
07:52
is like a very simple analogy of remote sensing that, what we do with the help of satellites.
07:59
And this particular energy what the source of energy sends us or which carries the signal
08:06
we call it as medium, medium that carries the signal. So, this particular medium like
08:18
after the energy being reflected by the object it carries the signal and it reaches our eyes.
08:26
So, basically if an object is appearing green what the object is doing, whatever the sunlight
08:31
comes in it is absorbing all other energy other than green and only green is reflected back.
08:37
So, this particular object is reflecting green color and it is absorbing all other color light
08:45
that is coming from the sun and that is why we are seeing that particular object as green. If an
08:50
object appears white to our eyes it is reflecting almost all the colors from the sun equally. That
08:56
particular objects will appear white to our eyes something like that. So, the basic remote sensing
09:01
that we do with respect to satellites has a very good analogy with the process of human vision.
09:08
What are the advantages of remote sensing?
09:11
First of all remote sensing is a non-contact and non-intrusive way of data collection,
09:18
that is as I said in the definition itself remote sensing is a non-contact way of data collection,
09:25
being non-contact we would not be disturbing the object or feature of our interest. So,
09:31
if I want to collect data about some object I need not go, touch the object or disturb the object.
09:36
So, from a distance I can collect the data that is non-contact and non-intrusive.
09:41
In addition to this being non-contact way of data collection, it provides access to almost
09:48
all points on the earth surface where we cannot physically enter. That is say like we are going
09:54
to see a hurricane and track how the hurricane is going to progress, where it is going to change
10:00
direction, we cannot go and collect data within a hurricane itself, it is like highly risky.
10:06
So, what we can do, we can collect data from satellites, safely sitting from the
10:10
satellite control centre, process the data and collect more information about the hurricanes,
10:15
that is possible. So, the first major advantage that is non-intrusive which won’t disturb the
10:21
object of our interest and then it provides access to almost all points on the earth's surface.
10:28
Then remote sensing provides repeated data. Like the data collected over a particular region
10:36
can be collected again and again based on our needs which will tell us how that particular
10:42
object or phenomenon is changing with time. Say for example one of the major applications
10:47
of remote sensing is agriculture. So, for agriculture we all know crops has a sowing date,
10:53
crops will grow, crops will finally like reach the harvest stage, people will harvest it,
10:59
then everything will be removed from that particular parcel of agriculture land.
11:02
So, crops follow a physical phenological cycle right from sowing date to harvest date.
11:09
So, as the plant grows the signal emitted by the plant will be different and just by seeing this
11:16
change in signal we will be able to understand what is the condition of the plant, whether it is
11:21
growing good or not. So, the temporal evolution of the crop cycle can be steady by taking
11:27
multiple images at different times in between the phenological cycle.
11:32
So, the repeated information provided by remote sensing offers us to study
11:36
how the object or the phenomenon of our interest evolves with time. The
11:43
next major advantage of remote sensing is synoptic coverage, that is it provides a
11:49
glance of a large portion of earth's surface in a single instance. This is really
11:55
necessary for people who works on meteorological applications, they want to track cloud movements.
12:00
They want to track hurricane moments, they want to track how dust storm is moving,
12:05
normally like dust storm from Sahara desert will move to South America, or
12:14
normally we see like the smog coming in from stubble burning it will reach the next states
12:20
and it will affect people over there. This is like every year it is occurring in India also.
12:24
So, for such studies we need to look at a much larger area, much larger than whatever eyes
12:31
can see or what we can like sense by our local means. So, that is called synoptic coverage. So,
12:37
remote sensing satellite image can provide you coverage of entire country, entire state or entire
12:45
continent sometimes even the entire globe depends on where the satellite is located. That kind of
12:50
synoptic coverage will help you to understand the phenomenon in a much more clearer way.
12:55
Then next major advantage is remote sensing provides global or regional coverage,
13:02
most of the satellites are put in orbits to either look at the same area again and again continuously
13:09
or to cover the entire globe by taking images
13:13
repeatedly at different portions. So, either based on the satellite orbits
13:17
you will be seeing the same area continuously or you will be able to cover the entire globe.
13:22
So, it provides a regional level or a global coverage which will be helpful for
13:28
various applications. Then the most critical thing what I will say as the advantage is remote sensing
13:35
enables us to see the object in different portions of the energy band which human eyes cannot see.
13:44
See when I talked about the human analogy of remote sensing I said like okay what color
13:50
the object reflects, it will be our eyes will perceive the object in that particular color.
13:55
Say if in a green object it is reflecting only the green energy our eyes can only see green. So,
14:01
what essentially happens is our eyes are tuned to the white light that comes from
14:06
the sun. Whatever energy coming within that particular energy level our eyes can sense.
14:11
But sun is a good source of energy in different portions of electromagnetic spectrum,
14:17
we will see what electromagnetic spectrum in the later classes.
14:20
So, sun provides energy in the very large portion of electromagnetic spectrum and each object
14:26
will behave differently in different portion of this incoming energy which our eyes cannot see.
14:32
So, remote sensing through the use of different sensors or different detector elements helps us
14:38
to see the same object in different different way by helping us to see in different bands of energy.
14:45
So, this kind of multi-spectral information we call this as multispectral information.
14:51
So, this multispectral information helps us to
14:56
understand that particular object in a much more detailed manner than what our eyes can see.
15:04
So, a very good example of how multispectral remote sensing will help us is given here.
15:11
So, this particular image is taken over United States by a sensor called MODIS,
15:19
this is like a remote sensing sensor in 2 different satellites.
15:23
So, what these bands essentially mean? These bands essentially mean different portions of the
15:30
energy spectrum that is coming from the sun. Like what our eyes can see is very small amount of
15:36
energy from the sun. But sun is giving energy in many different portions of the spectrum.
15:42
So, each band is a one small portion of spectrum.
15:45
So, the same area imaged by a sun sensor in space will give us a completely different
15:51
look of the land surface. Say band 2 we can see the land surface primarily here.
15:58
Band 6 we can see, band 26 land is not visible but we are seeing this cloud patches very clearly like
16:05
here this cloud patch is not visible in band 2. Here it is very much visible, whereas in band 27
16:13
whatever we are seeing entirely is whatever is present in the atmosphere and we are not
16:18
seeing anything related to ground. So, same area same sensor but by looking in different,
16:25
different portions of energy we are getting different information. In band 2 and band 6 we
16:30
are getting information about the ground surface. In band 26 we are able to see some clouds.
16:34
In band 27 we are seeing or getting information about the atmosphere. So, this sort of
16:40
multi-spectral information will provide us many different ideas about the object of our interest.
16:48
So, this is another example of how multispectral information will help us. Again this is like same
16:57
area covered by a sensor called thematic mapper, this sensor is in a satellite called landsat.
17:11
So, again this is band means different portions of energy.
17:17
So, what happens in this particular band 1? what are we seeing? we are seeing like 2 reservoirs.
17:24
The reservoirs appear a little bit brighter, some land surface. Band 2 it appears bit darker.
17:31
If you look at band 4 we are able to clearly see the reservoir in a much
17:35
darker tone. So, this is like water bodies or 2 reservoirs and this is like land surface.
17:52
So, essentially each band gives us different, different information about the same object of
17:59
our interest. So, basically just to summarize what we have learnt in this particular lecture.
18:05
In this particular lecture we have learnt what remote sensing is?
18:09
We have learnt what our remote sensing system comprises of and then we have learnt a remote
18:16
sensing system in analogy with human mission and then we saw the advantages of remote sensing. One
18:23
of the major advantages is the multispectral information provided by remote sensing data
18:27
and we also saw 2 examples of what multispectral information is and how the
18:34
images acquired in different portions of energy will look for the same area, thank you very much.
`

let lines = text.split('\n')
let jsonCaptions = []
let currentTime
let currentCaption = ''

for (let i = 0; i < lines.length; i++) {
  let line = lines[i]
  if (line.match('^[0-9]{2}:[0-9]{2}$')) {
    if (currentTime) {
      jsonCaptions.push({
        time: currentTime,
        caption: currentCaption.trim(),
      })
    }
    currentTime = line
    currentCaption = ''
  } else {
    currentCaption += ' ' + line
  }
}
if (currentCaption) {
  jsonCaptions.push({
    time: currentTime,
    caption: currentCaption.trim(),
  })
}

fs.writeFile(
  path.join(__dirname, 'captions.json'),
  JSON.stringify(jsonCaptions, null, 2),
  function (err) {
    if (err) {
      console.log(err)
    }
    console.log('The file was saved!')
  }
)
