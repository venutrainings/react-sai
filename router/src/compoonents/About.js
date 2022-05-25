import React, { useEffect } from 'react';
import {Link, Outlet, useNavigate,useLocation} from 'react-router-dom';
// import ModelPortal from './ModelPortal';

function About({users}) {
  let navigate=useNavigate();
  let location=useLocation()
    // useEffect(()=>{
    //   navigate('/')
    // },[])
  //  setTimeout(()=>{
  //    navigate('/')
  //  },[3000])

  return (
    <div className='about'>
   
      <div>
        {/* <ModelPortal /> */}
     <p>  pathname:  {location.pathname}</p> 
 
      </div>
        <h2>About page now </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis libero semper, dignissim purus sed, pharetra ligula. Vivamus mattis laoreet turpis non vehicula. Maecenas ultrices lacus augue. Curabitur neque elit, mollis a finibus non, suscipit quis magna. Suspendisse convallis nisi vulputate sollicitudin egestas. Praesent semper purus sed sagittis finibus. Mauris in sem felis. In ultrices feugiat eros, in aliquam felis congue id. Suspendisse auctor risus sapien, pharetra facilisis risus posuere id. Praesent ultricies consectetur massa, sed dapibus diam tincidunt sed.

Vivamus ultricies, est eu tincidunt lobortis, ipsum felis egestas justo, id pretium erat odio et neque. Etiam id nunc vulputate, maximus sapien et, faucibus lacus. Fusce fermentum eleifend risus, eu tempor felis porta a. Morbi interdum mauris quis rutrum lacinia. Duis consectetur tempus libero at vehicula. Aliquam bibendum aliquam quam, non luctus nibh egestas molestie. Pellentesque eleifend ut nunc ac pharetra. Curabitur ligula mi, tempor at nunc in, pulvinar efficitur justo. Donec in rhoncus ante. Nunc accumsan rutrum lacus eget rhoncus. Vivamus sagittis lacinia elementum. Nunc vitae porttitor diam. Duis imperdiet pellentesque metus accumsan blandit. In hac habitasse platea dictumst. Integer non sapien auctor leo posuere pulvinar. Curabitur vestibulum, enim eget vehicula varius, lorem dolor pharetra leo, a viverra massa lacus et diam.

Integer mollis quis enim ac bibendum. Donec felis justo, posuere molestie accumsan eget, cursus quis turpis. Morbi faucibus consequat erat in tempus. Vivamus iaculis lectus leo, non rutrum risus accumsan in. Ut efficitur ante ac condimentum ultricies. Suspendisse potenti. Aenean tortor ligula, fringilla ut leo ac, suscipit luctus mauris. Fusce tempus suscipit hendrerit. Nullam finibus nulla et est malesuada viverra. Mauris quis vestibulum felis. Morbi condimentum vitae turpis at scelerisque.

Sed cursus erat ac justo ultricies consequat. Nulla ultrices eros ac urna ullamcorper aliquet. Sed cursus sed metus vitae ornare. Mauris dignissim venenatis feugiat. Mauris libero justo, gravida ut risus a, sagittis mollis sem. Phasellus in dignissim erat, sit amet maximus ipsum. Sed eu ornare felis, a tincidunt tellus. Phasellus vitae quam tincidunt, auctor nisi in, accumsan purus. Cras elementum in nisl eget commodo. Fusce bibendum varius mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed maximus, enim aliquam laoreet mattis, nisi erat vulputate sapien, vitae auctor massa tellus sit amet sapien. Maecenas vel bibendum mauris. Cras tincidunt nisl diam, vitae condimentum enim aliquet vel. Maecenas sit amet lacus nec nulla elementum volutpat sed sit amet leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Mauris quis hendrerit nibh. In elementum mollis porta. Aenean elementum consequat arcu, pharetra fermentum ante commodo at. Aliquam venenatis, ante in hendrerit accumsan, orci purus sollicitudin augue, id elementum eros ligula at velit. In hac habitasse platea dictumst. Maecenas at erat eget elit elementum auctor. Duis quis dignissim ante, in dictum ante. Maecenas et accumsan neque, sed condimentum magna. Nam vehicula imperdiet cursus. Curabitur nisl diam, tincidunt sed commodo ac, molestie ac est.

Morbi nisi elit, tempus quis magna rhoncus, laoreet lobortis dui. Donec magna enim, auctor eu est et, fringilla porta orci. Curabitur varius egestas orci ut dignissim. Nulla ut velit et odio facilisis tempus. Donec tristique condimentum justo, id maximus nibh vulputate sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Vivamus posuere arcu eu lorem fringilla, non cursus neque ornare. Mauris molestie non erat vitae interdum. In venenatis turpis quis augue porttitor imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque et ligula vehicula orci consequat efficitur vitae ac quam. Integer commodo congue porta.

In id risus consequat, interdum erat et, finibus ligula. Nam eu facilisis purus, a aliquet nibh. Curabitur varius ultrices facilisis. Vivamus finibus, enim a maximus iaculis, tellus odio viverra ex, vel luctus mi justo ac elit. Nullam lacinia, nunc a vulputate porta, nunc diam finibus nisl, sed viverra enim mauris vel velit. Duis ipsum massa, tempor vel mauris in, egestas dignissim sem. Praesent ex nisi, vehicula non dictum nec, tristique a orci. Vivamus erat ante, iaculis sed eleifend non, ultricies id velit. Suspendisse ornare, orci sed tempor tincidunt, mauris quam feugiat purus, nec venenatis nisi felis sed urna. Vivamus luctus aliquam laoreet. Curabitur lacinia, est sed interdum laoreet, nibh mauris bibendum erat, vulputate viverra mauris felis in est. Nunc dui ipsum, varius non cursus nec, interdum sit amet diam. Donec accumsan lorem libero, egestas mattis nunc aliquam et. Sed efficitur, sem ut malesuada rhoncus, erat nulla vehicula nulla, quis gravida nisi dolor sed magna.

Nullam tristique iaculis condimentum. Integer cursus lectus et erat elementum feugiat. Aliquam nec pellentesque nulla, id facilisis dui. Sed vestibulum vestibulum nibh eu posuere. Sed in nisi turpis. Integer libero massa, tempus vitae nulla euismod, finibus interdum dolor. Aliquam viverra pellentesque ullamcorper. Mauris vitae velit et turpis tristique euismod quis in lacus. Suspendisse consectetur dapibus laoreet. Donec tortor justo, mattis nec turpis vitae, eleifend bibendum diam. Sed sed semper sem, ac sodales tellus. Vestibulum sollicitudin elit vitae blandit pulvinar. Fusce vel vestibulum dui, ac ornare mi. Ut sagittis scelerisque leo, eget rhoncus tellus vehicula non. Aenean nec mattis augue. Aliquam scelerisque nulla ac lorem interdum, et ultrices ante tincidunt.

In suscipit mattis elit et feugiat. Mauris eu est lacus. Vestibulum id consectetur diam, eu convallis arcu. Etiam varius quam quis arcu tempus egestas. Vivamus elit metus, viverra ac augue a, vestibulum varius tellus. Nullam non nisi dui. Morbi finibus at lacus in tristique.

Integer consectetur quis est eget iaculis. Aenean aliquet nisl risus, rutrum dignissim magna pellentesque eu. In velit lectus, venenatis vitae nibh a, vestibulum ultrices sem. Nulla mattis nulla sed porttitor egestas. Pellentesque nec ultricies odio. Sed vel nulla nec neque ultricies eleifend ac semper urna. Vivamus placerat fringilla nunc, eget pulvinar nulla. Quisque non iaculis sem. Donec sagittis fermentum ante, sed mollis libero sollicitudin mollis. Nam tristique ante neque, ut euismod velit consequat id.

Nullam vulputate, lacus at egestas rhoncus, lacus urna rhoncus magna, quis volutpat erat mauris eu lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh risus, interdum non efficitur sit amet, euismod non tellus. Nunc ornare leo eu vestibulum finibus. Fusce nec rutrum ligula. Morbi porttitor tortor velit, eu pellentesque ex interdum eu. Nunc sed orci sit amet lacus dictum tempus id in ligula. Aliquam mollis, orci eu gravida rutrum, nisi dui bibendum eros, vel aliquet eros quam sit amet nisl. Ut fringilla eros ac nulla cursus ultricies. Duis quis arcu a nulla tristique imperdiet. Ut luctus porta porta. Maecenas vitae quam sit amet urna euismod iaculis.

Donec semper quam eu dapibus consectetur. Nullam auctor, magna non ultrices mattis, sem risus scelerisque elit, id dignissim lacus nibh nec leo. Vestibulum ex augue, blandit non mattis sed, sagittis quis dui. Suspendisse eget aliquam nunc. Nulla consectetur metus velit, quis placerat magna venenatis vitae. Pellentesque sit amet nunc quis purus placerat dapibus. Maecenas laoreet velit elit, quis rhoncus lectus pretium eu. Ut in neque sit amet ipsum euismod hendrerit eget non nunc. Etiam egestas orci vitae mollis congue. In non odio nec ipsum consectetur mattis commodo et turpis. Nulla tempus metus a egestas viverra. Vivamus eget neque ultrices, sodales dolor sit amet, laoreet nulla.

Mauris mattis ultrices libero. Phasellus varius augue massa, lobortis luctus est vestibulum eu. Mauris non turpis at sem fermentum suscipit eget sit amet nulla. Cras ac urna quis tortor lobortis tristique. Ut dictum dui ut purus cursus cursus. Quisque nec metus eget nulla hendrerit malesuada et rhoncus sapien. Curabitur orci magna, vestibulum nec elementum nec, rhoncus quis ante. Duis pretium dictum odio id pulvinar. Cras porta dapibus metus eget egestas. Sed ornare vitae quam nec cursus. Fusce facilisis a libero aliquet congue. Donec auctor eleifend eleifend.

Ut eu interdum felis, a cursus sapien. Maecenas pharetra nulla eget elementum vulputate. Maecenas interdum ante purus, a dictum eros molestie eu. Aenean sit amet cursus sapien. Suspendisse id tortor erat. Curabitur sed augue felis. Duis eu consectetur arcu. Nullam tristique erat nisi, at varius neque ornare ac. Aenean consequat sapien id dolor pretium, non imperdiet urna vulputate. Etiam sollicitudin rhoncus odio, ac suscipit sapien ullamcorper in. Nullam nulla ex, finibus quis lacus vitae, posuere imperdiet arcu. Aenean a tortor enim. Nam pellentesque congue enim, sed varius justo commodo ornare. Donec in quam aliquam, euismod leo eleifend, interdum ex.

In eu turpis est. Duis eu ligula rutrum, placerat ex eu, molestie massa. Donec et imperdiet purus. Maecenas in euismod elit, vel feugiat dolor. Donec porta, mi eget ultrices lobortis, leo ex bibendum augue, ac egestas arcu ex quis diam. Phasellus eu enim vel risus mattis sodales a quis ipsum. Aliquam pulvinar volutpat velit in ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Generated 15 paragraphs, 1428 words, 9603 bytes of Lorem Ipsum</p>
        <button onClick={()=>{
        navigate('/Contact')
    }}>Go Back to Contact</button> 
       
     <div className='btn-container'>
     <button className='btn-back' onClick={()=>{
        navigate(-1)
    }}>Back {"<<<"}</button>
       <button  className='btn-next' onClick={()=>{
        navigate(1)
    }}>Next {">>>"}</button>
     </div>

   
    </div>
  )
}

export default About;