import React from 'react'
import '../Tabs/tabs.css'
function Tabs() {
    return (
        <div className="tab_cont">
            <section class="tabs">
  <input id="tab-1" type="radio" name="radio-set" class="tab-selector-1"  />
  <label for="tab-1" class="tab-label-1">Student List</label>
  <input id="tab-2" type="radio" name="radio-set" class="tab-selector-2" />
  <label for="tab-2" class="tab-label-2">Similar Colleges</label>
  <div class="content">
    <div class="content-1">
      <h2>Student List</h2>
      <p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>
    </div>
    <div class="content-2">
      <h2>Similar Colleges</h2>
      <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>
    </div>

  </div>
</section>
        </div>
    )
}

export default Tabs
