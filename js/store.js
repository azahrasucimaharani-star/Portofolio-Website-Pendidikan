/* Penyimpanan satu pintu: jika localStorage tidak tersedia, aplikasi tetap hidup di memori. */
const Store=(()=>{const KEY='belajarkuy:v1',listeners=new Set();let state;let storageOK=true;
 const todayStr=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
 const addDays=(str,n)=>{const [y,m,d]=str.split('-').map(Number),date=new Date(y,m-1,d+n);return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`};
 const uid=()=>`id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;
 const fresh=()=>{const today=todayStr();return{decks:SAMPLE_DECKS.map(x=>({...x})),cards:SAMPLE_CARDS.map((c,i)=>({id:`c${i+1}`,front:c[0],back:c[1],deckId:c[2],box:0,dueDate:today,lastReviewed:null})),quizHistory:[],tasks:SAMPLE_TASKS.map((t,i)=>({id:`t${i+1}`,title:t[0],subject:t[1],day:t[2],time:t[3],remind:i<4,done:false})),pomodoroSessions:Array.from({length:7},(_,i)=>({date:addDays(today,i-6),minutes:[25,50,25,0,25,50,25][i],label:i%2?'Bahasa Inggris':'Matematika'})).filter(x=>x.minutes),settings:{focus:25,shortBreak:5,longBreak:15,newCardsPerDay:10}}};
 function load(){try{const raw=localStorage.getItem(KEY);state=raw?{...fresh(),...JSON.parse(raw)}:fresh();if(!raw)save()}catch(e){storageOK=false;state=state||fresh();setTimeout(()=>window.toast?.('Penyimpanan tidak tersedia; perubahan hanya tersimpan selama halaman terbuka.',true),0)}return state}
 function save(){try{if(storageOK)localStorage.setItem(KEY,JSON.stringify(state));return true}catch(e){storageOK=false;window.toast?.('Penyimpanan tidak tersedia atau penuh.',true);return false}}
 function updateState(fn){fn(state);save();listeners.forEach(cb=>cb(state));return state}
 function subscribe(cb){listeners.add(cb);return()=>listeners.delete(cb)}
 return{load,save,getState:()=>state||load(),updateState,subscribe,todayStr,addDays,uid};})();
