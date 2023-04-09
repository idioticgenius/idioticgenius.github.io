// Play music on click

const sound_cloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const my_audio = document.querySelector('#my-audio');

off.addEventListener('click', () => sound_track('off'));
on.addEventListener('click', () => sound_track('on'));

const sound_track = (sound_status) => {
    if(sound_status === 'off')
    {
        on.style.display = 'block';
        off.style.display = 'none';
        sound_cloud.style.color = "#08fdd8";
        my_audio.play();
    }
    else if(sound_status === 'on')
    {
        off.style.display = 'block';
        on.style.display = 'none';
        sound_cloud.style.color = "#fd1056";
        my_audio.pause();
    }
    
}

//
const btn_bars = document.querySelector('.bars');
const btn_times = document.querySelector('.times');
const nav_bar = document.querySelector('.navigation');

btn_bars.addEventListener('click', () => myFunc('open'))
btn_times.addEventListener('click', () => myFunc('close'))

const myFunc = (nav_condition) => {
    if(nav_condition === 'open')
    {
        nav_bar.classList.add('show-nav');
        btn_times.style.display = "block";
        btn_bars.style.display = "none";
    }
    else if(nav_condition === 'close')
    {
        nav_bar.classList.remove('show-nav');
        btn_times.style.display = "none";
        btn_bars.style.display = "block";

    }
}
