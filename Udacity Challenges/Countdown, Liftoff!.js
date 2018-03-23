/*

NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)

Your output should look like the following:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!

*/

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

time=60;
while(time>=0)
{
    if((time===50)||(time===31)||(time===16)||(time===10)||(time===6)||(time===0))
    {
        if(time===50)
        {
          console.log('Orbiter transfers from ground to internal power'); 
        }
        else if(time===31)
        {
            console.log('Ground launch sequencer is go for auto sequence start');
        }
        else if(time===16)
        {
          console.log('Activate launch pad sound suppression system');  
        }
        else if(time===10)
        {
            console.log('Activate main engine hydrogen burnoff system');
        }
        else if(time===6)
        {
            console.log('Main engine start');
        }
        else if(time===0)
        {
            console.log('Solid rocket booster ignition and liftoff!');
        }
    }
    else
     {
          console.log('T-'+time+' seconds');
     }
   
    time--;
}
