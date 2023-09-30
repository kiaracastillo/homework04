
var homeContent =`

<div class="site-wrapper">

<div class="hero">
   
    <div class="callout">
        <h1>Lorem ipsum dolor </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deserunt, animi quae optio molestias sed error harum sapiente distinctio ratione, explicabo inventore architecto ex cupiditate aut ad nisi voluptate reiciendis.</p>
<button>Lorem</button>
</div>  
</div>

</div>

<div class="text">
<h1>Lorem ipsum</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt incidunt itaque dolorum perspiciatis inventore veniam accusamus ipsa iure. Ea iste reiciendis porro repellendus sed sit a maiores quae quaerat quam ad vel accusantium, quo eum, veniam omnis maxime quidem ipsam temporibus quisquam laborum nesciunt fugiat dolore aut. Magni ad ab deserunt ipsum beatae perferendis earum. Culpa, dolorum dignissimos! Vero, ad. Est, magni unde. Minus sunt excepturi saepe, nisi doloremque laborum perspiciatis iste consequuntur voluptates earum dolor labore tempora vitae sit magnam exercitationem corrupti atque itaque est assumenda dolorem deserunt? Nostrum, debitis. Nostrum similique beatae expedita consequuntur et tenetur nemo corrupti facere fugit ratione sit ut ea culpa praesentium at alias ducimus repellat, accusantium ipsum? Ipsa, tempore! At, incidunt rem blanditiis impedit tempora totam esse voluptate quo quisquam nam inventore eius culpa? Modi iure fugiat exercitationem quidem alias ullam maxime! Obcaecati ratione vel numquam, at dolor alias. Deleniti, nisi. Eos, nulla voluptatibus obcaecati consequatur aperiam omnis molestias impedit aspernatur quo. Quisquam, consectetur at! Dolor nulla earum perspiciatis cum dicta ipsam incidunt necessitatibus fuga natus qui tempore facere deleniti fugiat, omnis labore distinctio quod laboriosa provident, deleniti, dolore ipsum ullam nostrum praesentium magnam ut quasi sapiente modi molestias inventore facere a ad consequuntur? Pariatur id fugiat, perferendis natus possimus obcaecati reiciendis laboriosam consequuntur commodi quo nostrum culpa facere voluptatibus cumque minima molestiae corporis. Qui sapiente deleniti eligendi soluta inventore non dolore, suscipit tempora commodi minima sunt. Harum vitae reiciendis et. Consequuntur, molestiae in. Non at sapiente ipsam asperiores accusamus, voluptates et inventore laudantium aut necessitatibus ea commodi illum velit eveniet quasi natus reiciendis laboriosam architecto ipsa dolore a alias vel reprehenderit deleniti! Est labore nihil ducimus tempora quidem ut vel, mollitia saepe hic totam ea quae corporis placeat explicabo dolorum nulla fugit consequuntur.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt incidunt itaque dolorum perspiciatis inventore veniam accusamus ipsa iure. Ea iste reiciendis porro repellendus sed sit a maiores quae quaerat quam ad vel accusantium, quo eum, veniam omnis maxime quidem ipsam temporibus quisquam laborum nesciunt fugiat dolore aut. Magni ad ab deserunt ipsum beatae perferendis earum. Culpa, dolorum dignissimos! Vero, ad. Est, magni unde. Minus sunt excepturi saepe, nisi doloremque laborum perspiciatis iste consequuntur voluptates earum dolor labore tempora vitae sit magnam exercitationem corrupti atque itaque est assumenda dolorem deserunt? Nostrum, debitis. Nostrum similique beatae expedita consequuntur et tenetur nemo corrupti facere fugit ratione sit ut ea culpa praesentium at alias ducimus repellat, accusantium ipsum? Ipsa, tempore! At, Pariatur id fugiat, perferendis natus possimus obcaecati reiciendis laboriosam consequuntur commodi quo nostrum culpa facere voluptatibus cumque minima molestiae corporis. Qui sapiente deleniti eligendi soluta inventore non dolore, suscipit tempora commodi minima sunt. Harum vitae reiciendis et. Consequuntur, molestiae in. Non at sapiente ipsam asperiores accusamus, voluptates et inventore laudantium aut necessitatibus ea commodi illum velit eveniet quasi natus reiciendis laboriosam architecto ipsa dolore a alias vel reprehenderit deleniti! Est labore nihil ducimus tempora quidem ut vel, mollitia saepe hic totam ea quae corporis placeat explicabo dolorum nulla fugit consequuntur.</p>



</div>

<div class="photo">

<div class="oc1">
  <div class="photo1"></div>
</div>
<div class="oc2">
  <div class="photo2"></div>
</div>
<div class="oc3">
  <div class="photo3"></div>
</div>
<div class="oc4">
  <div class="photo4"></div>
</div>

</div>
<button>Lorem</button>


`;
var aboutContent =`
`;
var productsContent =`

`;
var contactContent =`

`;
var loginContent =`

`;

export function addPageContent(pageName) {
        let pageContentName = pageName + "Content";
    $("#app").html(eval(pageContentName));
}

