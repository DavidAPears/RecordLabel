import React, {Component} from "react";
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  script(){
    $(function() {
    var topbar = $(".topbar").height() + 20;
    var height = $(window).innerHeight();
    var width = $(window).innerWidth();
    if (580 >= width) {
      $(".fa-2x")
        .removeClass("fa-2x")
        .addClass("fa-lg");
    } else {
      $(".project").css({ "min-height": height - topbar, height: "auto" });
    }

    $(".title").fitText(0.9, { maxFontSize: "28px" });

    if (window.location.hash) {
      $(window.location.hash).click();
    }
    $(".social").tooltip();
  });

  if (screen && screen.width > 580) {
    $(window).resize(function() {
      var height = $(window).innerHeight();
      var topbar = $(".topbar").height() + 20;
      $(".project").css({ "min-height": height - topbar });
    });
  }

  $("body").on("click", ".project", function() {
    $(this)
      .addClass("selected")
      .siblings()
      .addClass("deselected");
    window.location.hash = $(this).attr("id");
    $(this)
      .siblings()
      .children(".title")
      .hide();
    $(".close").fadeIn();
    setTimeout(function() {
      $(".selected")
        .children(".content")
        .fadeIn();
    }, 500);
  });

  $("body").on("click", ".close", function() {
    $(this).fadeOut();
    window.location.hash = "";
    $(".selected")
      .children(".content")
      .fadeOut();
    setTimeout(function() {
      $(".selected")
        .siblings()
        .removeClass("deselected");
      $(".selected").removeClass("selected");

      setTimeout(function() {
        $(".title").fadeIn();
        $(".title").fitText(0.9, { maxFontSize: "28px" });
      }, 500);
    }, 500);
  });
}


  render() {
    this.script();
      return(

  <div>

    <div class="topbar">
      <h1>Big Records</h1>

      <ul class="social">
        <li><a class="fa fa-2x fa-twitter" href="https://twitter.com" target="_blank" title="Twitter" alt="Twitter"></a></li>
        <li><a class="fa fa-2x fa-instagram" href="https://codepen.io" target="_blank" title="Instagram" alt="Instagram Profile"></a></li>
        <li><a class="fa fa-2x fa-facebook" href="https://gist.github.com" target="_blank" title="Facebook" alt="Facebook"></a></li>
        <li><a class="fa fa-2x fa-envelope-o" href="mailto:davidapears@gmail.com" target="_blank" title="Contact" alt="Contact"></a></li>
        <li><a class="fa fa-2x fa-rss" href="https://codepen.io" target="_blank" title="Blog" alt="Blog"></a></li>
      </ul>
      </div>

      <div class="fa fa-times fa-2x close">&nbsp;</div>

      <div class="wrapper" id="portfolio">

      <div class="project one" id="bcmcr">
        <h2 class="title">Artist 1</h2>
          <div class="content">
            <a href="https://www.thebeatles.com/" target="_blank">
              <picture>
                <source srcset="hhttps://d2s36jztkuk7aw.cloudfront.net/sites/default/files/styles/hero/public/sticky/Beatles_chiswickhouse.jpg?itok=fDIkmZkN" media="(max-width: 480px)"></source>
                <img src="https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/styles/hero/public/sticky/Beatles_chiswickhouse.jpg?itok=fDIkmZkN" alt="Beathles screenshot" title="Click Image To Visit Site"/>
              </picture>
            </a>
            <a href="https://www.thebeatles.com/" class="button" target="_blank">Visit Site <i class="fa fa-arrow-right"></i></a>

      <div class="details">
        <b>Platform:</b><i class="fa fa-wordpress"></i> WordPress | <b>Languages:</b> HTML, CSS, JQuery, PHP | <b>Plugins:</b> <a href="https://isotope.metafizzy.co" target="_blank">Isotope</a>
      </div>

      <p>The <a href="http://bcmcr.org" target="_blank">Birmingham Centre For Media & Cultural Research</a> is made up of several research teams carrying out collaborative work aross a range of cultural interests. They required a new website that amalgamated the existing websites for these teams and acted as a hub for the research centre itself.</p>
      <picture>
        <source srcset="https://55sketch.github.io/images/bcmcr_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/bcmcr-main.jpg" alt="BCMCR.org website screenshot" title="Click Image To Visit Site"/>
       </picture>
      <p>The treatment of the main site was to make the central hub focussed on the researchers - the people behind the centre - and offer them an attractive profile page that brings in all of their work across the teams.</p>
      <picture>
        <source srcset="https://55sketch.github.io/images/bcmcr-profile_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/bcmcr-profile.jpg" alt="BCMCR.org profile screenshot"/>
       </picture>
      <p>Complementary themes were created for the individual sites to give them their own personality, as well as holding together a coherent design style throughout.</p>
      <picture>
        <source srcset="https://55sketch.github.io/images/bcmcr-ic_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/bcmcr-ic.jpg" alt="Interactive Cultures screenshot"/>
       </picture>
      <picture>
        <source srcset="https://55sketch.github.io/images/bcmcr-cecp_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/bcmcr-cecp.jpg" class="left" alt="CECP.org screenshot"/>
       </picture>
       <picture class="clearfix">
        <source srcset="https://55sketch.github.io/images/bcmcr-sc_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/bcmcr-sc.jpg" class="right" alt="Screen Cultures screenshot"/>
       </picture>
      <p>The sites are responsive, built on WordPress using custom MySQL queries, and the <a href="https://isotope.metafizzy.co" target="_blank">Isotope JQuery plugin</a> was used to handle sorting and filtering.</p>
      </div>
      </div>


      <div class="project two" id="edition-records">
        <h2 class="title">Artist 2</h2>
      <div class="content">

      <a href="http://editionrecords.com" target="_blank">
        <picture>
          <source srcset="https://55sketch.github.io/images/edition_mobile.jpg" media="(max-width: 480px)"></source>
          <img src="https://55sketch.github.io/images/edition.jpg" alt="Edition Records website screenshot" title="Click Image To Visit Site"/>
        </picture>
      </a>
        <a href="http://editionrecords.com" class="button" target="_blank">Visit Site <i class="fa fa-arrow-right"></i></a>
        <div class="details">
        <b>Platform:</b> <i class="fa fa-wordpress"></i> WordPress | <b>Languages:</b> HTML, CSS, JQuery, PHP
      </div>
      <p><a href="http://editionrecords.com" target="_blank">Edition Records</a> is one of the leading Jazz record labels in Europe.</p>
      <picture>
        <source srcset="https://55sketch.github.io/images/edition_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/edition-main.jpg" alt="Edition Records website screenshot"/>
       </picture>
      <p>The label has access to a very large range of high quality photography, so the design of the site is geared towards showing off this fantastic imagery.</p>
      <picture>
        <source srcset="https://55sketch.github.io/images/edition-artist_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/edition-artist.jpg" class="left" alt="Artist example screenshot"/>
       </picture>
       <picture class="clearfix">
        <source srcset="https://55sketch.github.io/images/edition-release_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/edition-release.jpg" class="right" alt="Release example screenshot"/>
       </picture>
      <p>The client needed distinct areas of the site for their artists and releases, as well as more standard features such as news updates and static pages. The site needed to be responsive and several third party services, such as Bandcamp, Flickr and Soundcloud also needed to be integrated.</p>
      <picture>
        <source srcset="https://55sketch.github.io/images/edition-video_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/edition-video.jpg" alt="Video modal screenshot"/>
       </picture>

      <p>In response to these requirements the site was built on WordPress, using a wide range of Custom Post Types and Custom Fields in order to make updating and managing the site extremely easy for the client.</p>
      </div>
      </div>


      <div class="project three" id="uberbooths">
        <h2 class="title">Artist 3</h2>
        <div class="content">
      <a href="https://uberbooths.co.uk" target="_blank">
        <picture>
        <source srcset="https://55sketch.github.io/images/uberbooths_mobile.jpg" media="(max-width: 480px)"></source>
        <img src="https://55sketch.github.io/images/uberbooths.jpg" alt="Uberbooths website screenshot" title="Click Image To Visit Site"/>
        </picture>
      </a>
      <a href="https://uberbooths.co.uk" class="button" target="_blank">Visit Site <i class="fa fa-arrow-right"></i></a>
      <div class="details">
      <b>Platform:</b> <i class="fa fa-wordpress"></i> WordPress | <b>Languages:</b> HTML, CSS, JQuery, Javascript, PHP | <b>Plugins:</b> <a href="http://liquidslider.kevinbatdorf.com/" target="_blank">LiquidSlider</a>
      </div>
      <p><a href="https://uberbooths.co.uk" target="_blank">Uberbooths</a> provide bespoke photobooths for a variety of events across the whole of the UK.</p>
      <picture>
        <source srcset="https://55sketch.github.io/images/uberbooths_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/uberbooths-main.jpg" alt="Uberbooths main screenshot"/>
       </picture>
       <p>The client had access to some excellent imagery for the website, so a large featured image was utilised on each page, and a full width content slider welcomes visitors to the front page of the website.</p>
        <picture>
        <source srcset="https://55sketch.github.io/images/uberbooths-page_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/uberbooths-page.jpg" alt="Uberbooths page screenshot"/>
       </picture>
       <p>One of the main features of the site allows users to design their own custom booth and get an instant quote. This was achieved using Javascript, JQuery and a PHP mail form.</p>
        <picture>
        <source srcset="https://55sketch.github.io/images/uberbooths-booth_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/uberbooths-booth.jpg" alt="Uberbooths Design Your Booth screenshot"/>
       </picture>
       <p>The site is responsive and built on WordPress</p>
      </div>
      </div>


      <div class="project four" id="tim-garland">
        <h2 class="title">Artist 4</h2>
      <div class="content">

      <a href="http://timgarland.com" target="_blank">
        <picture>
        <source srcset="https://55sketch.github.io/images/tim-garland_mobile.jpg" media="(max-width: 480px)"></source>
        <img src="https://55sketch.github.io/images/tim-garland.jpg" alt="Tim Garland website screenshot" title="Click Image To Visit Site"/>
        </picture>
      </a>
      <a href="http://timgarland.com" class="button" target="_blank">Visit Site <i class="fa fa-arrow-right"></i></a>
      <div class="details">
      <b>Platform:</b> <i class="fa fa-wordpress"></i> WordPress | <b>Languages:</b> HTML, CSS, JQuery, PHP | <b>Plugins:</b> <a href="http://liquidslider.kevinbatdorf.com/" target="_blank">LiquidSlider</a>
      </div>
      <p><a href="http://timgarland.com" target="_blank">Tim Garland</a> is one of <a href="http://editionrecords.com" target="_blank">Edition Records'</a> main artists and the label required a new website to coincide with the launch of Tim's new album.</p>
      <picture>
        <source srcset="https://55sketch.github.io/images/tim-garland-1_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/tim-garland-1.jpg" alt="Tim Garland screenshot"/>
       </picture>
       <p>Due to the nature of Tim's long, successful and varied career the website needed to showcase several different areas in which Tim works.</p>
       <picture>
        <source srcset="https://55sketch.github.io/images/tim-garland-2_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/tim-garland-2.jpg" alt="Tim Garland screenshot"/>
       </picture>
       <p>The site is built on WordPress and the responsive design reflects the artwork from Tim's latest album. Several third party services needed to be integrated, such as YouTube, SoundCloud and Songkick</p>
       <picture>
        <source srcset="https://55sketch.github.io/images/tim-garland-3_mobile.jpg" media="(max-width: 480px)"></source>

        <img src="https://55sketch.github.io/images/tim-garland-3.jpg" alt="Tim Garland screenshot"/>
       </picture>
       <p>The entire site is navigated through utilising LiquidSlider acting as a full page content slider, which provides an interesting and unique user experience.</p>
      </div>
      </div>


      <div class="project five" id="soundcloud-visualiser">
        <h2 class="title">Artist 5</h2>
      <div class="content">

      <a href="https://55sketch.github.io/soundcloud" target="_blank">
        <picture>
        <source srcset="https://55sketch.github.io/images/soundcloud_mobile.jpg" media="(max-width: 480px)"></source>
        <img src="https://55sketch.github.io/images/soundcloud.jpg" alt="Soundcloud Visualiser website screenshot" title="Click Image To Visit Site"/>
        </picture>
      </a>
      <a href="https://55sketch.github.io/soundcloud" class="button" target="_blank">Visit Site <i class="fa fa-arrow-right"></i></a>
      <div class="details">
      <b>Platform:</b> Static | <b>Languages:</b> HTML, CSS, JQuery, JSON, API | <b>Plugins:</b> <a href="https://github.com/soundcloud/SoundCloud-API-jQuery-plugin" target="_blank">SoundCloud API JQuery Plugin</a>, <a href="https://isotope.metafizzy.co" target="_blank">Isotope</a>
      </div>
      <p>Built as an exercise in learning how to utilise Web APIs, my <a href="https://55sketch.github.io/soundcloud" target="_blank">SoundCloud Data Visualiser</a> allows users to log in with their SoundCloud account and view their stats for Plays, Downloads and Favourites</p>
      <p>The stats can be sorted using the Isotope plugin, and the relative size of the bars can be adjusted to suit the user's taste</p>
      <p>If you don't have a SoundCloud account, you can view a basic version of the visualiser on my <a href="https://codepen.io/nickmoreton/pen/Eveaq" target="_blank">CodePen account</a></p>
      </div>
      </div>

    </div>
  </div>
  );
 }
}
export default Home;
