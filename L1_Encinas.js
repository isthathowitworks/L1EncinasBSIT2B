<!DOCTYPE html>
<!-- saved from url=(0022)chrome://new-tab-page/ -->
<html dir="ltr" lang="en" class="focus-outline-visible" lazy-loaded="true"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <title>New Tab</title>
    <style>
      body {
        background: #045B62;
        margin: 0;
      }

      #backgroundImage {
        border: none;
        height: 100%;
        pointer-events: none;
        position: fixed;
        top: 0;
        visibility: hidden;
        width: 100%;
      }

      [show-background-image] #backgroundImage {
        visibility: visible;
      }
    </style>
  <cr-iconset name="cr20" size="20"><template shadowrootmode="open"><!---->
<svg id="baseSvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" viewBox="0 0 20 20">
 </svg>
<slot></slot>
</template>
  <svg>
    <defs>
      <!--
      Keep these in sorted order by id="".
      -->
      <g id="block">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM5.1 16.31C6.45 17.37 8.15 18 10 18C14.42 18 18 14.42 18 10C18 8.15 17.37 6.45 16.31 5.1L5.1 16.31Z">
        </path>
      </g>
      <g id="cloud-off">
        <path d="M16 18.125L13.875 16H5C3.88889 16 2.94444 15.6111 2.16667 14.8333C1.38889 14.0556 1 13.1111 1 12C1 10.9444 1.36111 10.0347 2.08333 9.27083C2.80556 8.50694 3.6875 8.09028 4.72917 8.02083C4.77083 7.86805 4.8125 7.72222 4.85417 7.58333C4.90972 7.44444 4.97222 7.30555 5.04167 7.16667L1.875 4L2.9375 2.9375L17.0625 17.0625L16 18.125ZM5 14.5H12.375L6.20833 8.33333C6.15278 8.51389 6.09722 8.70139 6.04167 8.89583C6 9.07639 5.95139 9.25694 5.89583 9.4375L4.83333 9.52083C4.16667 9.57639 3.61111 9.84028 3.16667 10.3125C2.72222 10.7708 2.5 11.3333 2.5 12C2.5 12.6944 2.74306 13.2847 3.22917 13.7708C3.71528 14.2569 4.30556 14.5 5 14.5ZM17.5 15.375L16.3958 14.2917C16.7153 14.125 16.9792 13.8819 17.1875 13.5625C17.3958 13.2431 17.5 12.8889 17.5 12.5C17.5 11.9444 17.3056 11.4722 16.9167 11.0833C16.5278 10.6944 16.0556 10.5 15.5 10.5H14.125L14 9.14583C13.9028 8.11806 13.4722 7.25694 12.7083 6.5625C11.9444 5.85417 11.0417 5.5 10 5.5C9.65278 5.5 9.31944 5.54167 9 5.625C8.69444 5.70833 8.39583 5.82639 8.10417 5.97917L7.02083 4.89583C7.46528 4.61806 7.93056 4.40278 8.41667 4.25C8.91667 4.08333 9.44444 4 10 4C11.4306 4 12.6736 4.48611 13.7292 5.45833C14.7847 6.41667 15.375 7.59722 15.5 9C16.4722 9 17.2986 9.34028 17.9792 10.0208C18.6597 10.7014 19 11.5278 19 12.5C19 13.0972 18.8611 13.6458 18.5833 14.1458C18.3194 14.6458 17.9583 15.0556 17.5 15.375Z">
        </path>
      </g>
      <g id="delete">
        <path d="M 5.832031 17.5 C 5.375 17.5 4.984375 17.335938 4.65625 17.011719 C 4.328125 16.683594 4.167969 16.292969 4.167969 15.832031 L 4.167969 5 L 3.332031 5 L 3.332031 3.332031 L 7.5 3.332031 L 7.5 2.5 L 12.5 2.5 L 12.5 3.332031 L 16.667969 3.332031 L 16.667969 5 L 15.832031 5 L 15.832031 15.832031 C 15.832031 16.292969 15.671875 16.683594 15.34375 17.011719 C 15.015625 17.335938 14.625 17.5 14.167969 17.5 Z M 14.167969 5 L 5.832031 5 L 5.832031 15.832031 L 14.167969 15.832031 Z M 7.5 14.167969 L 9.167969 14.167969 L 9.167969 6.667969 L 7.5 6.667969 Z M 10.832031 14.167969 L 12.5 14.167969 L 12.5 6.667969 L 10.832031 6.667969 Z M 5.832031 5 L 5.832031 15.832031 Z M 5.832031 5 ">
        </path>
      </g>
      <g id="domain" viewBox="0 -960 960 960">
        <path d="M96-144v-672h384v144h384v528H96Zm72-72h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm168 456h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm144 456h312v-384H480v80h72v72h-72v80h72v72h-72v80Zm168-232v-72h72v72h-72Zm0 152v-72h72v72h-72Z"></path>
      </g>
      <g id="kite">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6327 8.00094L10.3199 2L16 8.00094L10.1848 16.8673C10.0995 16.9873 10.0071 17.1074 9.90047 17.2199C9.42417 17.7225 8.79147 18 8.11611 18C7.44076 18 6.80806 17.7225 6.33175 17.2199C5.85545 16.7173 5.59242 16.0497 5.59242 15.3371C5.59242 14.977 5.46445 14.647 5.22275 14.3919C4.98104 14.1369 4.66825 14.0019 4.32701 14.0019H4V12.6667H4.32701C5.00237 12.6667 5.63507 12.9442 6.11137 13.4468C6.58768 13.9494 6.85071 14.617 6.85071 15.3296C6.85071 15.6896 6.97867 16.0197 7.22038 16.2747C7.46209 16.5298 7.77488 16.6648 8.11611 16.6648C8.45735 16.6648 8.77014 16.5223 9.01185 16.2747C9.02396 16.2601 9.03607 16.246 9.04808 16.2319C9.08541 16.1883 9.12176 16.1458 9.15403 16.0947L9.55213 15.4946L4.6327 8.00094ZM10.3199 13.9371L6.53802 8.17116L10.3199 4.1814L14.0963 8.17103L10.3199 13.9371Z">
        </path>
      </g>
      <g id="menu">
        <path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path>
      </g>
      <g id="password">
        <path d="M5.833 11.667c.458 0 .847-.16 1.167-.479.333-.333.5-.729.5-1.188s-.167-.847-.5-1.167a1.555 1.555 0 0 0-1.167-.5c-.458 0-.854.167-1.188.5A1.588 1.588 0 0 0 4.166 10c0 .458.16.854.479 1.188.333.319.729.479 1.188.479Zm0 3.333c-1.389 0-2.569-.486-3.542-1.458C1.319 12.569.833 11.389.833 10c0-1.389.486-2.569 1.458-3.542C3.264 5.486 4.444 5 5.833 5c.944 0 1.813.243 2.604.729a4.752 4.752 0 0 1 1.833 1.979h7.23c.458 0 .847.167 1.167.5.333.319.5.708.5 1.167v3.958c0 .458-.167.854-.5 1.188A1.588 1.588 0 0 1 17.5 15h-3.75a1.658 1.658 0 0 1-1.188-.479 1.658 1.658 0 0 1-.479-1.188v-1.042H10.27a4.59 4.59 0 0 1-1.813 2A5.1 5.1 0 0 1 5.833 15Zm3.292-4.375h4.625v2.708H15v-1.042a.592.592 0 0 1 .167-.438.623.623 0 0 1 .458-.188c.181 0 .327.063.438.188a.558.558 0 0 1 .188.438v1.042H17.5V9.375H9.125a3.312 3.312 0 0 0-1.167-1.938 3.203 3.203 0 0 0-2.125-.77 3.21 3.21 0 0 0-2.354.979C2.827 8.298 2.5 9.083 2.5 10s.327 1.702.979 2.354a3.21 3.21 0 0 0 2.354.979c.806 0 1.514-.25 2.125-.75.611-.514 1-1.167 1.167-1.958Z"></path>
      </g>
      
  </defs></svg>
</cr-iconset><cr-iconset name="cr" size="24"><template shadowrootmode="open"><!---->
<svg id="baseSvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" viewBox="0 0 24 24">
 </svg>
<slot></slot>
</template>
  <svg>
    <defs>
      <!--
      These icons are copied from Polymer's iron-icons and kept in sorted order.
      -->
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
      </g>
      <g id="arrow-back">
        <path d="m7.824 13 5.602 5.602L12 20l-8-8 8-8 1.426 1.398L7.824 11H20v2Zm0 0">
        </path>
      </g>
      <g id="arrow-drop-up">
        <path d="M7 14l5-5 5 5z"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="M7 10l5 5 5-5z"></path>
      </g>
      <g id="arrow-forward">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
        </path>
      </g>
      <g id="arrow-right">
        <path d="M10 7l5 5-5 5z"></path>
      </g>
      <g id="cancel">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </g>
      <g id="check">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </g>
      <g id="check-circle" viewBox="0 -960 960 960">
        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
      </g>
      <g id="chevron-left">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="clear">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="chrome-product" viewBox="0 -960 960 960">
        <path d="M336-479q0 60 42 102t102 42q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102Zm144 216q11 0 22.5-.5T525-267L427-99q-144-16-237.5-125T96-479q0-43 9.5-84.5T134-645l160 274q28 51 78 79.5T480-263Zm0-432q-71 0-126.5 42T276-545l-98-170q53-71 132.5-109.5T480-863q95 0 179 45t138 123H480Zm356 72q15 35 21.5 71t6.5 73q0 155-100 260.5T509-96l157-275q14-25 22-52t8-56q0-40-15-77t-41-67h196Z">
        </path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="computer">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z">
        </path>
      </g>
      <g id="create">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
      </g>
      <g id="delete" viewBox="0 -960 960 960">
        <path d="M309.37-135.87q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-474.5h-53.5v-83H378.5v-53.5h202.52v53.5h206.11v83h-53.5v474.07q0 35.21-24.26 59.32t-58.74 24.11H309.37Zm341.26-557.5H309.37v474.5h341.26v-474.5ZM379.7-288.24h77.5v-336h-77.5v336Zm123.1 0h77.5v-336h-77.5v336ZM309.37-693.37v474.5-474.5Z">
        </path>
      </g>
      <g id="domain">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
      </g>
      <!-- source: https://fonts.google.com/icons?selected=Material+Symbols+Outlined:family_link:FILL@0;wght@0;GRAD@0;opsz@24&icon.size=24&icon.color=%23e8eaed -->
      <g id="kite" viewBox="0 -960 960 960">
        <path d="M390-40q-51 0-90.5-30.5T246-149q-6-23-25-37t-43-14q-16 0-30 6.5T124-175l-61-51q21-26 51.5-40t63.5-14q51 0 91 30t54 79q6 23 25 37t42 14q19 0 34-10t26-25l1-2-276-381q-8-11-11.5-23t-3.5-24q0-16 6-30.5t18-26.5l260-255q11-11 26-17t30-6q15 0 30 6t26 17l260 255q12 12 18 26.5t6 30.5q0 12-3.5 24T825-538L500-88q-18 25-48 36.5T390-40Zm110-185 260-360-260-255-259 256 259 359Zm1-308Z"></path>
        
      </g>
      <g id="error">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
        </path>
      </g>
      <g id="error-outline">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
        </path>
      </g>
      <g id="expand-less">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
      </g>
      <g id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </g>
      <g id="extension">
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z">
        </path>
      </g>
      <g id="file-download" viewBox="0 -960 960 960">
        <path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z"></path>
      </g>
      <g id="fullscreen">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z">
        </path>
      </g>
      <g id="group">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z">
        </path>
      </g>
      <g id="help-outline">
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
        </path>
      </g>
      <g id="history">
        <path d="M12.945312 22.75 C 10.320312 22.75 8.074219 21.839844 6.207031 20.019531 C 4.335938 18.199219 3.359375 15.972656 3.269531 13.34375 L 5.089844 13.34375 C 5.175781 15.472656 5.972656 17.273438 7.480469 18.742188 C 8.988281 20.210938 10.808594 20.945312 12.945312 20.945312 C 15.179688 20.945312 17.070312 20.164062 18.621094 18.601562 C 20.167969 17.039062 20.945312 15.144531 20.945312 12.910156 C 20.945312 10.714844 20.164062 8.855469 18.601562 7.335938 C 17.039062 5.816406 15.15625 5.054688 12.945312 5.054688 C 11.710938 5.054688 10.554688 5.339844 9.480469 5.902344 C 8.402344 6.46875 7.476562 7.226562 6.699219 8.179688 L 9.585938 8.179688 L 9.585938 9.984375 L 3.648438 9.984375 L 3.648438 4.0625 L 5.453125 4.0625 L 5.453125 6.824219 C 6.386719 5.707031 7.503906 4.828125 8.804688 4.199219 C 10.109375 3.566406 11.488281 3.25 12.945312 3.25 C 14.300781 3.25 15.570312 3.503906 16.761719 4.011719 C 17.949219 4.519531 18.988281 5.214844 19.875 6.089844 C 20.761719 6.964844 21.464844 7.992188 21.976562 9.167969 C 22.492188 10.34375 22.75 11.609375 22.75 12.964844 C 22.75 14.316406 22.492188 15.589844 21.976562 16.777344 C 21.464844 17.964844 20.761719 19.003906 19.875 19.882812 C 18.988281 20.765625 17.949219 21.464844 16.761719 21.976562 C 15.570312 22.492188 14.300781 22.75 12.945312 22.75 Z M 16.269531 17.460938 L 12.117188 13.34375 L 12.117188 7.527344 L 13.921875 7.527344 L 13.921875 12.601562 L 17.550781 16.179688 Z M 16.269531 17.460938">
        </path>
      </g>
      <g id="info">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
        </path>
      </g>
      <g id="info-outline">
        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
        </path>
      </g>
      <g id="insert-drive-file">
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <g id="location-on">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
        </path>
      </g>
      <g id="mic">
        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
        </path>
      </g>
      <g id="more-vert">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path>
      </g>
      <g id="open-in-new" viewBox="0 -960 960 960">
        <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z">
        </path>
      </g>
      <g id="person">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="phonelink">
        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z">
        </path>
      </g>
      <g id="print">
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z">
        </path>
      </g>
      <g id="schedule">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z">
        </path>
      </g>
      <g id="search">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </g>
      <g id="security">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z">
        </path>
      </g>
      <!-- The <g> IDs are exposed as global variables in Vulcanized mode, which
        conflicts with the "settings" namespace of MD Settings. Using an "_icon"
        suffix prevents the naming conflict. -->
      <g id="settings_icon">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
        </path>
      </g>
      <g id="star">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
        </path>
      </g>
      <g id="sync" viewBox="0 -960 960 960">
        <path d="M216-192v-72h74q-45-40-71.5-95.5T192-480q0-101 61-177.5T408-758v75q-63 23-103.5 77.5T264-480q0 48 19.5 89t52.5 70v-63h72v192H216Zm336-10v-75q63-23 103.5-77.5T696-480q0-48-19.5-89T624-639v63h-72v-192h192v72h-74q45 40 71.5 95.5T768-480q0 101-61 177.5T552-202Z">
        </path>
      </g>
      <g id="thumbs-down">
        <path d="M6 3h11v13l-7 7-1.25-1.25a1.454 1.454 0 0 1-.3-.475c-.067-.2-.1-.392-.1-.575v-.35L9.45 16H3c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3Zm9 2H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z">
        </path>
      </g>
      <g id="thumbs-down-filled">
        <path d="M6 3h10v13l-7 7-1.25-1.25a1.336 1.336 0 0 1-.29-.477 1.66 1.66 0 0 1-.108-.574v-.347L8.449 16H3c-.535 0-1-.2-1.398-.602C1.199 15 1 14.535 1 14v-2c0-.117.012-.242.04-.375.022-.133.062-.258.108-.375l3-7.05c.153-.333.403-.618.75-.848A1.957 1.957 0 0 1 6 3Zm12 13V3h4v13Zm0 0">
        </path>
      </g>
      <g id="thumbs-up">
        <path d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="thumbs-up-filled">
        <path d="M18 21H8V8l7-7 1.25 1.25c.117.117.21.273.29.477.073.199.108.39.108.574v.347L15.551 8H21c.535 0 1 .2 1.398.602C22.801 9 23 9.465 23 10v2c0 .117-.012.242-.04.375a1.897 1.897 0 0 1-.108.375l-3 7.05a2.037 2.037 0 0 1-.75.848A1.957 1.957 0 0 1 18 21ZM6 8v13H2V8Zm0 0">
      </path></g>
      <g id="videocam" viewBox="0 -960 960 960">
        <path d="M216-192q-29 0-50.5-21.5T144-264v-432q0-29.7 21.5-50.85Q187-768 216-768h432q29.7 0 50.85 21.15Q720-725.7 720-696v168l144-144v384L720-432v168q0 29-21.15 50.5T648-192H216Zm0-72h432v-432H216v432Zm0 0v-432 432Z">
        </path>
      </g>
      <g id="warning">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </g>
    </defs>
  </svg>
</cr-iconset><cr-iconset name="iph" size="24"><template shadowrootmode="open"><!---->
<svg id="baseSvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" viewBox="0 0 24 24">
 </svg>
<slot></slot>
</template>
  <svg>
    <defs>
      
      <g id="celebration">
        <path fill="none" d="M0 0h20v20H0z"></path>
        <path fill-rule="evenodd" d="m2 22 14-5-9-9-5 14Zm10.35-5.82L5.3 18.7l2.52-7.05 4.53 4.53ZM14.53 12.53l5.59-5.59a1.25 1.25 0 0 1 1.77 0l.59.59 1.06-1.06-.59-.59a2.758 2.758 0 0 0-3.89 0l-5.59 5.59 1.06 1.06ZM10.06 6.88l-.59.59 1.06 1.06.59-.59a2.758 2.758 0 0 0 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76ZM17.06 11.88l-1.59 1.59 1.06 1.06 1.59-1.59a1.25 1.25 0 0 1 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61a2.758 2.758 0 0 0-3.89 0ZM15.06 5.88l-3.59 3.59 1.06 1.06 3.59-3.59a2.758 2.758 0 0 0 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77Z">
        </path>
      </g>
      <g id="lightbulb_outline">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2 11.7V16h-4v-2.3C8.48 12.63 7 11.53 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.49-1.51 3.65-3 4.7z">
        </path>
      </g>
      <g id="lightbulb_outline_chrome_refresh" width="20" height="20" viewBox="0 -960 960 960">
        <path d="M479.779-81.413q-30.975 0-52.812-22.704-21.837-22.704-21.837-55.035h149.74q0 32.631-22.058 55.185-22.058 22.554-53.033 22.554ZM333.848-209.065v-75.587h292.304v75.587H333.848Zm-15-125.5Q254.696-374 219.282-440.533q-35.413-66.532-35.413-142.163 0-123.288 86.364-209.59 86.363-86.301 209.739-86.301t209.767 86.301q86.392 86.302 86.392 209.59 0 75.87-35.413 142.283Q705.304-374 641.152-334.565H318.848Zm26.348-83h269.608q37.283-30.522 57.805-73.566 20.521-43.043 20.521-91.512 0-89.424-61.812-151.184-61.813-61.76-151.087-61.76-89.274 0-151.318 61.76-62.043 61.76-62.043 151.184 0 48.469 20.521 91.512 20.522 43.044 57.805 73.566Zm134.804 0Z">
        </path>
      </g>
    </defs>
  </svg>
</cr-iconset><cr-iconset name="tab_resumption" size="20"><template shadowrootmode="open"><!---->
<svg id="baseSvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" viewBox="0 0 20 20">
 </svg>
<slot></slot>
</template>
  <svg>
    <defs>
      <g id="computer" viewBox="0 -960 960 960">
        <path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z">
        </path>
      </g>
      <g id="globe" viewBox="0 -960 960 960">
        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z">
        </path>
      </g>
      <g id="phone" viewBox="0 -960 960 960">
        <path d="M400-160h160v-40H400v40ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm0-80h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z">
        </path>
      </g>
      <g id="tablet" viewBox="0 -960 960 960">
        <path d="M200-40q-33 0-56.5-23.5T120-120v-720q0-33 23.5-56.5T200-920h560q33 0 56.5 23.5T840-840v720q0 33-23.5 56.5T760-40H200Zm0-200v120h560v-120H200Zm200 80h160v-40H400v40ZM200-320h560v-400H200v400Zm0-480h560v-40H200v40Zm0 0v-40 40Zm0 560v120-120Z">
        </path>
      </g>
      <g id="automotive" viewBox="0 0 24 24">
        <path d="M6 19V20C6 20.2833 5.9 20.525 5.7 20.725C5.51667 20.9083 5.28333 21 5 21H4C3.71667 21 3.475 20.9083 3.275 20.725C3.09167 20.525 3 20.2833 3 20V12L5.1 6C5.2 5.7 5.375 5.45833 5.625 5.275C5.89167 5.09167 6.18333 5 6.5 5H17.5C17.8167 5 18.1 5.09167 18.35 5.275C18.6167 5.45833 18.8 5.7 18.9 6L21 12V20C21 20.2833 20.9 20.525 20.7 20.725C20.5167 20.9083 20.2833 21 20 21H19C18.7167 21 18.475 20.9083 18.275 20.725C18.0917 20.525 18 20.2833 18 20V19H6ZM5.8 10H18.2L17.15 7H6.85L5.8 10ZM5 12V17V12ZM7.5 16C7.91667 16 8.26667 15.8583 8.55 15.575C8.85 15.275 9 14.9167 9 14.5C9 14.0833 8.85 13.7333 8.55 13.45C8.26667 13.15 7.91667 13 7.5 13C7.08333 13 6.725 13.15 6.425 13.45C6.14167 13.7333 6 14.0833 6 14.5C6 14.9167 6.14167 15.275 6.425 15.575C6.725 15.8583 7.08333 16 7.5 16ZM16.5 16C16.9167 16 17.2667 15.8583 17.55 15.575C17.85 15.275 18 14.9167 18 14.5C18 14.0833 17.85 13.7333 17.55 13.45C17.2667 13.15 16.9167 13 16.5 13C16.0833 13 15.725 13.15 15.425 13.45C15.1417 13.7333 15 14.0833 15 14.5C15 14.9167 15.1417 15.275 15.425 15.575C15.725 15.8583 16.0833 16 16.5 16ZM5 17H19V12H5V17Z" fill="#444746">
        </path>
      </g>
      <g id="wearable" viewBox="0 0 14 20">
        <path d="M5.5 2H8.5C8.36667 2 8.15833 2 7.875 2C7.60833 2 7.31667 2 7 2C6.68333 2 6.38333 2 6.1 2C5.83333 2 5.63333 2 5.5 2ZM5.5 18C5.63333 18 5.83333 18 6.1 18C6.38333 18 6.68333 18 7 18C7.31667 18 7.60833 18 7.875 18C8.15833 18 8.36667 18 8.5 18H5.5ZM4 20L2.65 15.45C1.85 14.8167 1.20833 14.025 0.725 13.075C0.241667 12.125 2.38419e-07 11.1 2.38419e-07 10C2.38419e-07 8.9 0.241667 7.875 0.725 6.925C1.20833 5.975 1.85 5.18333 2.65 4.55L4 -4.76837e-07H10L11.35 4.55C12.15 5.18333 12.7917 5.975 13.275 6.925C13.7583 7.875 14 8.9 14 10C14 11.1 13.7583 12.125 13.275 13.075C12.7917 14.025 12.15 14.8167 11.35 15.45L10 20H4ZM7 15C8.38333 15 9.55833 14.5167 10.525 13.55C11.5083 12.5667 12 11.3833 12 10C12 8.61667 11.5083 7.44167 10.525 6.475C9.55833 5.49167 8.38333 5 7 5C5.61667 5 4.43333 5.49167 3.45 6.475C2.48333 7.44167 2 8.61667 2 10C2 11.3833 2.48333 12.5667 3.45 13.55C4.43333 14.5167 5.61667 15 7 15ZM5.1 3.25C5.43333 3.16667 5.75 3.1 6.05 3.05C6.36667 3 6.68333 2.975 7 2.975C7.31667 2.975 7.625 3 7.925 3.05C8.24167 3.1 8.56667 3.16667 8.9 3.25L8.5 2H5.5L5.1 3.25ZM5.5 18H8.5L8.9 16.75C8.56667 16.8333 8.24167 16.9 7.925 16.95C7.625 16.9833 7.31667 17 7 17C6.68333 17 6.36667 16.9833 6.05 16.95C5.75 16.9 5.43333 16.8333 5.1 16.75L5.5 18Z" fill="#444746">
        </path>
      </g>
      <g id="tv" viewBox="0 0 24 24">
        <path d="M8 16H10V10H11.75L14 16H16L19 8H16.5L15 12.5L13.5 8H5V10H8V16ZM5 21C4.45 21 3.975 20.8083 3.575 20.425C3.19167 20.025 3 19.55 3 19V5C3 4.45 3.19167 3.98333 3.575 3.6C3.975 3.2 4.45 3 5 3H19C19.55 3 20.0167 3.2 20.4 3.6C20.8 3.98333 21 4.45 21 5V19C21 19.55 20.8 20.025 20.4 20.425C20.0167 20.8083 19.55 21 19 21H5ZM5 19H19V5H5V19ZM5 5V19V5Z" fill="#444746">
        </path>
      </g>
    </defs>
  </svg>
</cr-iconset><cr-iconset name="modules" size="20"><template shadowrootmode="open"><!---->
<svg id="baseSvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" viewBox="0 0 20 20">
 </svg>
<slot></slot>
</template>
  <svg>
    <defs>
      <g id="block" viewBox="0 -960 960 960">
        <path d="M480-87.87q-80.674 0-152.109-30.717T202.761-203q-53.696-53.696-84.294-125.25T87.869-480.478q0-81.674 30.598-152.489 30.598-70.816 84.294-124.392 53.695-53.576 125.13-84.174Q399.326-872.131 480-872.131q81.674 0 152.609 30.598t124.63 84.174q53.696 53.576 84.294 124.392 30.598 70.815 30.598 152.489 0 80.674-30.598 152.228T757.239-203q-53.695 53.696-124.63 84.413Q561.674-87.869 480-87.869Zm0-83q53.087 0 100.652-16.804t86.13-47.609L234.804-667.022q-30.326 39.044-47.13 86.37-16.804 47.326-16.804 100.174 0 128.804 90.282 219.206Q351.435-170.87 480-170.87Zm245.435-123.065q30.087-39.043 46.891-86.369t16.804-100.174q0-128.565-90.282-218.609Q608.565-789.13 480-789.13q-52.848 0-100.054 16.565-47.207 16.565-86.25 46.652l431.739 431.978Z">
        </path>
      </g>
      <g id="dock_to_left" viewBox="0 -960 960 960">
        <path d="M213.87-135.869q-32.421 0-55.211-22.79t-22.79-55.211v-532.26q0-32.421 22.79-55.211t55.211-22.79h532.26q32.421 0 55.211 22.79t22.79 55.211v532.26q0 32.421-22.79 55.211t-55.211 22.79H213.87Zm329.043-83.001v-522.26H218.87v522.26h324.043Z">
        </path>
      </g>
      <g id="done" viewBox="0 -960 960 960">
        <path d="M395-277.348 218.348-455l57.891-57.891L395-395.131l288.761-287.76L741.652-624 395-277.348Z">
        </path>
      </g>
      <g id="info" viewBox="0 -960 960 960">
        <path d="M440.413-284.413h79.174V-528h-79.174v243.587Zm39.376-310.804q17.244 0 29.119-11.665 11.875-11.664 11.875-28.907 0-17.244-11.665-29.119-11.664-11.875-28.907-11.875-17.244 0-29.119 11.665-11.875 11.664-11.875 28.907 0 17.244 11.665 29.119 11.664 11.875 28.907 11.875Zm.487 507.348q-81.189 0-152.621-30.618-71.432-30.618-124.991-84.177-53.559-53.559-84.177-124.949-30.618-71.391-30.618-152.845 0-81.455 30.618-152.387t84.177-124.491q53.559-53.559 124.949-84.177 71.391-30.618 152.845-30.618 81.455 0 152.387 30.618t124.491 84.177q53.559 53.559 84.177 124.716 30.618 71.156 30.618 152.344 0 81.189-30.618 152.621-30.618 71.432-84.177 124.991-53.559 53.559-124.716 84.177-71.156 30.618-152.344 30.618ZM480-170.87q129.043 0 219.087-90.043Q789.13-350.957 789.13-480t-90.043-219.087Q609.043-789.13 480-789.13t-219.087 90.043Q170.87-609.043 170.87-480t90.043 219.087Q350.957-170.87 480-170.87ZM480-480Z">
        </path>
      </g>
      <g id="thumb_down" viewBox="0 -960 960 960">
        <path d="M240.957-807.63h457.434v489.087L413.978-34.13l-38.293-25.776q-17.881-12.529-27.479-32.224-9.597-19.696-5.597-41.131l1-2.369 37.282-182.913H120q-34.065 0-58.533-24.468Q37-367.478 37-401.543v-42.413q0-8.582 1.5-15.748 1.5-7.165 4.978-14.404l120.435-283.066q9.196-22.869 30.685-36.663 21.489-13.793 46.359-13.793Zm378.021 83H240.957L120.478-443.956v42.413h358.218l-46.131 231.282 186.413-186.413V-724.63Zm0 367.956V-724.63v367.956Zm79.413 38.131v-83h136.587V-724.63H698.391v-83h219.587v489.087H698.391Z">
        </path>
      </g>
      <g id="tune" viewBox="0 -960 960 960">
        <path d="M454.087-136.587V-384H533.5v84h288v79.413h-288v84h-79.413Zm-315.587-84V-300h247.413v79.413H138.5Zm144-135.826v-84h-144v-79.174h144v-84h79.413v247.174H282.5Zm147.587-84v-79.174H821.5v79.174H430.087Zm144-135.587v-247.413H653.5v84h168V-660h-168v84h-79.413ZM138.5-660v-79.413h391.413V-660H138.5Z">
        </path>
      </g>
      <g id="visibility_off" viewBox="0 -960 960 960">
        <path d="m638.435-429.065-72.283-72.283q2.326-29.391-18.337-49.717t-48.38-18l-70.37-70.37q12.283-4.282 25.446-6.424Q467.674-648 480-648q70 0 119 49t49 119q0 11.848-2.141 25.489-2.142 13.641-7.424 25.446ZM777.652-289.37l-56.782-57.26q34.326-27.522 62.75-60.185 28.423-32.663 48.902-73.185-49.479-100.761-144.5-158.38Q593-696 480-696q-26 0-49.685 2.761-23.685 2.761-46.011 9.043l-64.217-64.217q38-15 78.456-21 40.457-6 81.457-6 144.435 0 264.967 78.695Q865.5-618.022 919.413-480q-22 57.478-58.978 104.935-36.978 47.456-82.783 85.695ZM765.13-87.13 639.435-213.065q-37.522 14.239-77.5 21.359-39.978 7.119-81.935 7.119-144.674 0-265.207-78.935Q94.261-342.456 40.587-480q21.76-56.522 58-104.359 36.239-47.837 83.761-86.793l-99.044-98.565 53.631-53.631 681.587 682.826L765.13-87.13ZM238.848-614.37q-34.522 28.479-63.207 60.544-28.684 32.065-47.924 73.826 49 101 144.142 158.5Q367-264 480-264q23.848 0 47.772-3.141 23.924-3.142 48.924-9.142l-45-45q-12.805 4.761-25.848 7.022Q492.804-312 480-312q-70 0-119-49t-49-119q0-12.565 3.141-25.728 3.142-13.163 5.663-25.968l-81.956-82.674Zm292.739 84.457Zm-102.935 99.587Z">
        </path>
      </g>
    </defs>
  </svg>
</cr-iconset></head>
  <body style="background-color: rgb(4, 91, 98);">
    <iframe id="backgroundImage" src="./L1_Encinas_files/saved_resource.html"></iframe>
    <ntp-app realbox-can-show-secondary-side="" style="--ntp-logo-color: rgba(255, 255, 255, 1.00); --color-new-tab-page-attribution-foreground: rgba(255, 255, 255, 1.00); --color-new-tab-page-most-visited-foreground: rgba(255, 255, 255, 1.00);"><template shadowrootmode="open"><!----><!--_html_template_start_--><div id="content">
  <!--?lit$5812602783$-->
  <!--?lit$5812602783$-->
    <div id="oneGoogleBarScrim" hidden="" fixed=""></div>
    <ntp-iframe id="oneGoogleBar" src="chrome-untrusted://new-tab-page/one-google-bar?paramsencoded=" allow="camera chrome-untrusted://new-tab-page; display-capture chrome-untrusted://new-tab-page" style="clip-path: url(&quot;#oneGoogleBarClipPath&quot;); z-index: 1000;"><template shadowrootmode="open"><!----><!--_html_template_start_-->
<iframe id="iframe" src="chrome-untrusted://new-tab-page/one-google-bar?paramsencoded=" allow="camera chrome-untrusted://new-tab-page; display-capture chrome-untrusted://new-tab-page">
</iframe>
<!--_html_template_end_--></template> 
    </ntp-iframe>
  
  
  <ntp-logo id="logo" single-colored=""><template shadowrootmode="open"><!----><!--_html_template_start_--><!--?lit$5812602783$-->
  <div id="logo"></div>

<!--?lit$5812602783$-->
<!--?lit$5812602783$-->
<!--_html_template_end_--></template>
  </ntp-logo>
  <div id="searchboxContainer">
    <cr-searchbox id="searchbox" can-show-secondary-side="" searchbox-lens-search-enabled="" searchbox-voice-search-enabled_="" searchbox-lens-search-enabled_="" is-dark="" shown=""><template shadowrootmode="open"><!--_html_template_start_--><style>
.icon-arrow-back{--cr-icon-image:url('chrome://resources/images/icon_arrow_back.svg')}.icon-arrow-dropdown{--cr-icon-image:url('chrome://resources/images/icon_arrow_dropdown.svg')}.icon-arrow-drop-down-cr23{--cr-icon-image:url('chrome://resources/images/icon_arrow_drop_down_cr23.svg')}.icon-arrow-drop-up-cr23{--cr-icon-image:url('chrome://resources/images/icon_arrow_drop_up_cr23.svg')}.icon-cancel{--cr-icon-image:url('chrome://resources/images/icon_cancel.svg')}.icon-clear{--cr-icon-image:url('chrome://resources/images/icon_clear.svg')}.icon-copy-content{--cr-icon-image:url('chrome://resources/images/icon_copy_content.svg')}.icon-delete-gray{--cr-icon-image:url('chrome://resources/images/icon_delete_gray.svg')}.icon-edit{--cr-icon-image:url('chrome://resources/images/icon_edit.svg')}.icon-file{--cr-icon-image:url('chrome://resources/images/icon_filetype_generic.svg')}.icon-folder-open{--cr-icon-image:url('chrome://resources/images/icon_folder_open.svg')}.icon-picture-delete{--cr-icon-image:url('chrome://resources/images/icon_picture_delete.svg')}.icon-expand-less{--cr-icon-image:url('chrome://resources/images/icon_expand_less.svg')}.icon-expand-more{--cr-icon-image:url('chrome://resources/images/icon_expand_more.svg')}.icon-external{--cr-icon-image:url('chrome://resources/images/open_in_new.svg')}.icon-more-vert{--cr-icon-image:url('chrome://resources/images/icon_more_vert.svg')}.icon-refresh{--cr-icon-image:url('chrome://resources/images/icon_refresh.svg')}.icon-search{--cr-icon-image:url('chrome://resources/images/icon_search.svg')}.icon-settings{--cr-icon-image:url('chrome://resources/images/icon_settings.svg')}.icon-visibility{--cr-icon-image:url('chrome://resources/images/icon_visibility.svg')}.icon-visibility-off{--cr-icon-image:url('chrome://resources/images/icon_visibility_off.svg')}.subpage-arrow{--cr-icon-image:url('chrome://resources/images/arrow_right.svg')}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style><style include="cr-icons">:host{--cr-searchbox-width:var(--cr-searchbox-min-width);--cr-searchbox-border-radius:calc(0.5 * var(--cr-searchbox-height));--cr-searchbox-icon-width:26px;--cr-searchbox-inner-icon-margin:8px;--cr-searchbox-voice-icon-offset:16px;--cr-searchbox-voice-search-button-width:0px;--cr-searchbox-match-padding-inline-start:12px;border-radius:var(--cr-searchbox-border-radius);box-shadow:var(--cr-searchbox-shadow);font-size:var(--cr-searchbox-font-size,16px);height:var(--cr-searchbox-height);width:var(--cr-searchbox-width)}:host([is-lens-searchbox_]:not([dropdown-is-visible])){--cr-searchbox-shadow:none}:host([show-thumbnail]){--cr-searchbox-thumbnail-icon-offset:54px}:host([searchbox-chrome-refresh-theming][dropdown-is-visible]){--cr-searchbox-shadow:0 0 12px 4px var(--color-searchbox-shadow)}:host([searchbox-chrome-refresh-theming]:not([searchbox-steady-state-shadow]):not([dropdown-is-visible])){--cr-searchbox-shadow:none}:host-context([searchbox-width-behavior_=revert]):host([can-show-secondary-side]:not([dropdown-is-visible])){--cr-searchbox-width:var(--cr-searchbox-min-width)}:host([can-show-secondary-side][has-secondary-side]){--cr-searchbox-secondary-side-display:block}:host([is-dark]){--cr-searchbox-shadow:0 2px 6px 0 var(--color-searchbox-shadow)}:host([searchbox-voice-search-enabled_]){--cr-searchbox-voice-search-button-width:var(--cr-searchbox-icon-width)}:host([searchbox-lens-search-enabled_]){--cr-searchbox-voice-icon-offset:53px}@media (forced-colors:active){:host{border:1px solid ActiveBorder}}:host([dropdown-is-visible]:not([is-lens-searchbox_])){box-shadow:none}:host([match-searchbox]){box-shadow:none}:host([match-searchbox]:not([dropdown-is-visible]):hover){border:1px solid transparent;box-shadow:var(--cr-searchbox-shadow)}:host([match-searchbox]:not([is-dark]):not([dropdown-is-visible]):not(:hover)){border:1px solid var(--color-searchbox-border)}#inputWrapper{height:100%;position:relative}input{background-color:var(--color-searchbox-background);border:none;border-radius:var(--cr-searchbox-border-radius);color:var(--color-searchbox-foreground);font-family:inherit;font-size:inherit;height:100%;outline:0;padding-inline-end:calc(var(--cr-searchbox-voice-icon-offset) + var(--cr-searchbox-voice-search-button-width) + var(--cr-searchbox-inner-icon-margin));padding-inline-start:calc(52px + var(--cr-searchbox-thumbnail-icon-offset,0px));position:relative;width:100%}:host-context([is-back-arrow-visible]) input{padding-inline-start:calc(22px + var(--cr-searchbox-thumbnail-icon-offset,0px))}:host([searchbox-chrome-refresh-theming]) input::selection{background-color:var(--color-searchbox-selection-background);color:var(--color-searchbox-selection-foreground)}input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}input::-webkit-search-cancel-button{appearance:none;margin:0}input::placeholder{color:var(--color-searchbox-placeholder)}input:focus::placeholder{visibility:hidden}:host([is-lens-searchbox_]) input:focus::placeholder{visibility:visible}:host([dropdown-is-visible]) input,input:focus{background-color:var(--color-searchbox-results-background)}:host([is-lens-searchbox_][dropdown-is-visible]) input{background-color:var(--color-bubble-searchbox-results-input-background,--color-searchbox-results-background)}:host([is-lens-searchbox_]:not([dropdown-is-visible])) input:focus{background-color:var(--color-searchbox-background)}:host([searchbox-chrome-refresh-theming]:not([searchbox-steady-state-shadow]):not([dropdown-is-visible])) input{background-color:var(--color-searchbox-background)}:host([searchbox-chrome-refresh-theming]:not([searchbox-steady-state-shadow]):not([dropdown-is-visible])) input:hover,input:hover{background-color:var(--color-searchbox-background-hovered)}cr-searchbox-icon{height:100%;left:var(--cr-searchbox-icon-left-position);position:absolute;top:var(--cr-searchbox-icon-top-position);pointer-events:none}:host-context([is-back-arrow-visible]) #icon{display:none}:host-context([dir=rtl]) cr-searchbox-icon{left:unset;right:12px}.searchbox-icon-button{background-color:transparent;background-position:center;background-repeat:no-repeat;background-size:21px 21px;border:none;border-radius:2px;cursor:pointer;height:100%;outline:0;padding:0;pointer-events:auto;position:absolute;right:16px;width:var(--cr-searchbox-icon-width)}:host([searchbox-chrome-refresh-theming]) .searchbox-icon-button{position:static}.searchbox-icon-button-container{border-radius:2px;height:100%;position:absolute;right:16px;top:var(--cr-searchbox-icon-top-position);z-index:100}.searchbox-icon-button-container.voice{right:var(--cr-searchbox-voice-icon-offset)}:host-context(.focus-outline-visible) .searchbox-icon-button-container:focus-within{box-shadow:var(--ntp-focus-shadow)}:host(:not([searchbox-chrome-refresh-theming])) #voiceSearchButton{background-image:url('chrome://resources/cr_components/searchbox/icons/mic.svg')}:host(:not([searchbox-chrome-refresh-theming])) #lensSearchButton{background-image:url('chrome://resources/cr_components/searchbox/icons/camera.svg')}:host([searchbox-chrome-refresh-theming]:not([color-source-is-baseline])) #lensSearchButton,:host([searchbox-chrome-refresh-theming]:not([color-source-is-baseline])) #voiceSearchButton{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:21px 21px;background-color:var(--color-searchbox-lens-voice-icon-background)}:host([searchbox-chrome-refresh-theming]:not([color-source-is-baseline])) #voiceSearchButton{-webkit-mask-image:url('chrome://resources/cr_components/searchbox/icons/mic.svg')}:host([searchbox-chrome-refresh-theming][color-source-is-baseline]) #voiceSearchButton{background-image:url('chrome://resources/cr_components/searchbox/icons/mic.svg')}:host([searchbox-chrome-refresh-theming]:not([color-source-is-baseline])) #lensSearchButton{-webkit-mask-image:url('chrome://resources/cr_components/searchbox/icons/camera.svg')}:host([searchbox-chrome-refresh-theming][color-source-is-baseline]) #lensSearchButton{background-image:url('chrome://resources/cr_components/searchbox/icons/camera.svg')}:host([searchbox-lens-search-enabled_]):host-context([dir=rtl]) #voiceSearchButton{left:var(--cr-searchbox-voice-icon-offset);right:unset}:host([searchbox-lens-search-enabled_]) #voiceSearchButton{right:var(--cr-searchbox-voice-icon-offset)}:host-context([dir=rtl]) .searchbox-icon-button{left:16px;right:unset}:host-context([dir=rtl]) .searchbox-icon-button-container{left:16px;right:unset}:host([searchbox-lens-search-enabled_]):host-context([dir=rtl]) .searchbox-icon-button-container.voice{left:var(--cr-searchbox-voice-icon-offset);right:unset}:host-context(.focus-outline-visible) .searchbox-icon-button:focus{box-shadow:var(--ntp-focus-shadow)}:-webkit-any(input,cr-searchbox-icon,.searchbox-icon-button){z-index:100}cr-searchbox-dropdown{left:0;position:absolute;right:0;top:0;z-index:99}.truncate{overflow:hidden;text-overflow:ellipsis}#thumbnailContainer{align-content:center;inset-block-start:var(--cr-searchbox-icon-top-position);inset-inline-start:52px;height:100%;outline:0;position:absolute;z-index:101}:host-context([is-back-arrow-visible]) #thumbnailContainer{inset-inline-start:16px}</style><div id="inputWrapper"><input id="input" class="truncate" type="search" autocomplete="off" spellcheck="false" role="combobox" aria-controls="matches" aria-expanded="false" aria-description="" placeholder="Search Google or type a URL" aria-live="polite"><cr-searchbox-icon id="icon" in-searchbox="" background-image="" mask-image="url(//resources/cr_components/searchbox/icons/search_cr23.svg)"><template shadowrootmode="open"><!--_html_template_start_--><style>:host{--cr-searchbox-icon-border-radius:8px;align-items:center;display:flex;flex-shrink:0;justify-content:center;width:32px}:host(:not([is-lens-searchbox_])){--cr-searchbox-icon-border-radius:4px}#container{align-items:center;aspect-ratio:1/1;border-radius:var(--cr-searchbox-icon-border-radius);display:flex;justify-content:center;overflow:hidden;position:relative;width:100%}:host-context(cr-searchbox-match[has-image]):host(:not([is-weather-answer])) #container{background-color:var(--color-searchbox-results-icon-container-background,var(--container-bg-color))}:host-context(cr-searchbox-match[is-rich-suggestion]:not([has-image])):host(:not([has-icon-container-background])) #container{background-color:var(--google-blue-600);border-radius:50%;height:24px;width:24px}:host([has-icon-container-background]:not([in-searchbox])) #container{background-color:var(--color-searchbox-answer-icon-background)}:host([is-weather-answer]:not([in-searchbox])) #container{background-color:var(--color-searchbox-results-background)}#image{display:none;height:100%;object-fit:contain;width:100%}:host-context(cr-searchbox-match[has-image]) #image{display:initial}:host([is-answer]) #image{max-height:24px;max-width:24px}#imageOverlay{display:none}:host-context(cr-searchbox-match[is-entity-suggestion][has-image]) #imageOverlay{background:#000;display:block;inset:0;opacity:.05;position:absolute}#icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-searchbox-results-search-icon-size,16px);background-color:var(--color-searchbox-search-icon-background);background-position:center center;background-repeat:no-repeat;background-size:16px;height:24px;width:24px}:host([in-searchbox][is-lens-searchbox_]) #icon{background-color:var(--color-searchbox-google-g-background);height:var(--cr-searchbox-icon-size-in-searchbox);width:var(--cr-searchbox-icon-size-in-searchbox)}@media (forced-colors:active){:host([in-searchbox][is-lens-searchbox_]) #icon{background-color:ButtonText}}:host-context(cr-searchbox-match[has-image]) #icon{display:none}:host-context(cr-searchbox-match[is-rich-suggestion]) #icon{background-color:#fff}:host([in-searchbox][background-image*='//resources/cr_components/omnibox/icons/google_g.svg']) #icon{background-size:24px}:host([in-searchbox]) #icon{-webkit-mask-size:var(--cr-searchbox-icon-size-in-searchbox);background-size:var(--cr-searchbox-icon-size-in-searchbox)}:host([has-icon-container-background]:not([in-searchbox])) #icon{background-color:var(--color-searchbox-answer-icon-foreground)}:host(:not([in-searchbox])[is-lens-searchbox_]) #container{background-color:var(--color-searchbox-results-icon-container-background);border-radius:4000px}</style><div id="container" style="--container-bg-color: transparent;"><img id="image"><div id="imageOverlay"></div><div id="icon" style="-webkit-mask-image: url(//resources/cr_components/searchbox/icons/search_cr23.svg);"></div></div><!--_html_template_end_--></template></cr-searchbox-icon><dom-if style="display: none;"><template></template></dom-if><dom-if style="display: none;"><template></template></dom-if><button id="voiceSearchButton" class="searchbox-icon-button" title="Search by voice"></button><dom-if style="display: none;"><template></template></dom-if><button id="lensSearchButton" class="searchbox-icon-button" title="Search by image"></button><dom-if style="display: none;"><template></template></dom-if><dom-if style="display: none;"><template></template></dom-if><cr-searchbox-dropdown id="matches" part="searchbox-dropdown" exportparts="dropdown-content" role="listbox" hidden=""><template shadowrootmode="open"><!--_html_template_start_--><style>
.icon-arrow-back{--cr-icon-image:url('chrome://resources/images/icon_arrow_back.svg')}.icon-arrow-dropdown{--cr-icon-image:url('chrome://resources/images/icon_arrow_dropdown.svg')}.icon-arrow-drop-down-cr23{--cr-icon-image:url('chrome://resources/images/icon_arrow_drop_down_cr23.svg')}.icon-arrow-drop-up-cr23{--cr-icon-image:url('chrome://resources/images/icon_arrow_drop_up_cr23.svg')}.icon-cancel{--cr-icon-image:url('chrome://resources/images/icon_cancel.svg')}.icon-clear{--cr-icon-image:url('chrome://resources/images/icon_clear.svg')}.icon-copy-content{--cr-icon-image:url('chrome://resources/images/icon_copy_content.svg')}.icon-delete-gray{--cr-icon-image:url('chrome://resources/images/icon_delete_gray.svg')}.icon-edit{--cr-icon-image:url('chrome://resources/images/icon_edit.svg')}.icon-file{--cr-icon-image:url('chrome://resources/images/icon_filetype_generic.svg')}.icon-folder-open{--cr-icon-image:url('chrome://resources/images/icon_folder_open.svg')}.icon-picture-delete{--cr-icon-image:url('chrome://resources/images/icon_picture_delete.svg')}.icon-expand-less{--cr-icon-image:url('chrome://resources/images/icon_expand_less.svg')}.icon-expand-more{--cr-icon-image:url('chrome://resources/images/icon_expand_more.svg')}.icon-external{--cr-icon-image:url('chrome://resources/images/open_in_new.svg')}.icon-more-vert{--cr-icon-image:url('chrome://resources/images/icon_more_vert.svg')}.icon-refresh{--cr-icon-image:url('chrome://resources/images/icon_refresh.svg')}.icon-search{--cr-icon-image:url('chrome://resources/images/icon_search.svg')}.icon-settings{--cr-icon-image:url('chrome://resources/images/icon_settings.svg')}.icon-visibility{--cr-icon-image:url('chrome://resources/images/icon_visibility.svg')}.icon-visibility-off{--cr-icon-image:url('chrome://resources/images/icon_visibility_off.svg')}.subpage-arrow{--cr-icon-image:url('chrome://resources/images/arrow_right.svg')}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style><style>
.action-icon{--cr-icon-button-active-background-color:var(--color-new-tab-page-active-background);--cr-icon-button-fill-color:var(--color-searchbox-results-icon);--cr-icon-button-focus-outline-color:var(--color-searchbox-results-icon-focused-outline);--cr-icon-button-hover-background-color:var(--color-searchbox-results-button-hover);--cr-icon-button-icon-size:16px;--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0;--cr-icon-button-size:24px}
    </style><style include="cr-icons searchbox-dropdown-shared-style">:host{user-select:none}#content{background-color:var(--color-searchbox-results-background);border-radius:calc(.5 * var(--cr-searchbox-height));box-shadow:var(--cr-searchbox-shadow);display:flex;gap:16px;margin-bottom:8px;overflow:hidden;padding-bottom:8px;padding-top:var(--cr-searchbox-height)}@media (forced-colors:active){#content{border:1px solid ActiveBorder}}.matches{display:contents}cr-searchbox-match{color:var(--color-searchbox-results-foreground)}.header{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-size:inherit;font-weight:inherit;height:44px;margin-block-end:0;margin-block-start:0;outline:0;padding-bottom:6px;padding-inline-end:16px;padding-inline-start:12px;padding-top:6px}.header .text{color:var(--color-searchbox-results-foreground-dimmed);font-size:.875em;font-weight:500;overflow:hidden;padding-inline-end:1px;text-overflow:ellipsis;white-space:nowrap}.header cr-icon-button{top:1px}.header:focus-within:not(:focus) cr-icon-button{--cr-icon-button-fill-color:var(--color-searchbox-results-icon-selected)}@media (forced-colors:active){cr-searchbox-match:-webkit-any(:hover,:focus-within,[selected]){background-color:Highlight}}.primary-side{flex:1;min-width:0}:host-context([is-lens-searchbox_]) .primary-side::before{content:'';position:relative;height:1px;background-color:var(--color-searchbox-dropdown-divider);top:0;width:calc(var(--cr-searchbox-width) - 24px);display:block;left:12px;margin-block-end:4px}.secondary-side{display:var(--cr-searchbox-secondary-side-display,none);min-width:0;padding-block-end:8px;padding-inline-end:16px;width:314px}.secondary-side .header{padding-inline-end:0;padding-inline-start:0}.secondary-side .matches{display:block}.secondary-side .matches.horizontal{display:flex;gap:4px}</style><div id="content" part="dropdown-content"><div class="primary-side"><dom-repeat as="groupId" style="display: none;"><template></template></dom-repeat></div><div class="secondary-side"><dom-repeat as="groupId" style="display: none;"><template></template></dom-repeat></div><dom-repeat as="sideType" style="display: none;"><template></template></dom-repeat></div><!--_html_template_end_--></template></cr-searchbox-dropdown></div><!--_html_template_end_--></template>
    </cr-searchbox>
    <!--?lit$5812602783$-->
  </div>
  <!--?lit$5812602783$-->
    <cr-toast id="webstoreToast" duration="10000" hidden=""><template shadowrootmode="open"><!----><slot></slot></template>
      <div>You can find older colors in the Chrome Web Store</div>
      <cr-button role="button" tabindex="0" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="background"></div>
<slot id="prefixIcon" name="prefix-icon">
</slot>
<span id="content"><slot></slot></span>
<slot id="suffixIcon" name="suffix-icon">
</slot>
<div id="hoverBackground" part="hoverBackground"></div></template>
        Find themes
      </cr-button>
    </cr-toast>
  
  <!--?lit$5812602783$-->
    <!--?lit$5812602783$-->
      <cr-most-visited id="mostVisited" single-row="" reflow-on-overflow="" use-white-tile-icon_="" is-dark_="" visible_="" custom-links-enabled_=""><template shadowrootmode="open"><!----><!--_html_template_start_-->
<div id="container" style="--tile-background-color: rgba(3, 73, 78, 1.00); --column-count: 8; --row-count: 1;">
  <!--?lit$5812602783$--><!---->
    <div class="tile" draggable="true" title="(891) YouTube" data-index="0">
      <a draggable="false" href="https://www.youtube.com/" aria-label="(891) YouTube">
      </a>
      <cr-icon-button id="actionMenuButton" class="icon-more-vert" tabindex="0" title="More actions for (891) YouTube shortcut" data-index="0" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <cr-icon-button id="removeButton" class="icon-clear" tabindex="0" title="Remove" hidden="" data-index="0" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <div class="tile-icon">
        <img draggable="false" alt="" src="chrome://favicon2/?size=24&amp;scaleFactor=1x&amp;showFallbackMonogram=&amp;pageUrl=https%3A%2F%2Fwww.youtube.com%2F">
        <div class="query-tile-icon" draggable="false" hidden=""></div>
      </div>
      <div class="tile-title title-ltr">
        <span><!--?lit$5812602783$-->(891) YouTube</span>
      </div>
    </div>
  <!----><!---->
    <div class="tile" draggable="true" title="(1) Facebook" data-index="1">
      <a draggable="false" href="https://www.facebook.com/" aria-label="(1) Facebook">
      </a>
      <cr-icon-button id="actionMenuButton" class="icon-more-vert" tabindex="0" title="More actions for (1) Facebook shortcut" data-index="1" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <cr-icon-button id="removeButton" class="icon-clear" tabindex="0" title="Remove" hidden="" data-index="1" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <div class="tile-icon">
        <img draggable="false" alt="" src="chrome://favicon2/?size=24&amp;scaleFactor=1x&amp;showFallbackMonogram=&amp;pageUrl=https%3A%2F%2Fwww.facebook.com%2F">
        <div class="query-tile-icon" draggable="false" hidden=""></div>
      </div>
      <div class="tile-title title-ltr">
        <span><!--?lit$5812602783$-->(1) Facebook</span>
      </div>
    </div>
  <!----><!---->
    <div class="tile" draggable="true" title="Watch Anime Online, Watch English Anime Online Subbed, Dubbed" data-index="2">
      <a draggable="false" href="https://9anime.to/" aria-label="Watch Anime Online, Watch English Anime Online Subbed, Dubbed">
      </a>
      <cr-icon-button id="actionMenuButton" class="icon-more-vert" tabindex="0" title="More actions for Watch Anime Online, Watch English Anime Online Subbed, Dubbed shortcut" data-index="2" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <cr-icon-button id="removeButton" class="icon-clear" tabindex="0" title="Remove" hidden="" data-index="2" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <div class="tile-icon">
        <img draggable="false" alt="" src="chrome://favicon2/?size=24&amp;scaleFactor=1x&amp;showFallbackMonogram=&amp;pageUrl=https%3A%2F%2F9anime.to%2F">
        <div class="query-tile-icon" draggable="false" hidden=""></div>
      </div>
      <div class="tile-title title-ltr">
        <span><!--?lit$5812602783$-->Watch Anime Online, Watch English Anime Online Subbed, Dubbed</span>
      </div>
    </div>
  <!----><!---->
    <div class="tile" draggable="true" title="Roblox" data-index="3">
      <a draggable="false" href="https://www.roblox.com/" aria-label="Roblox">
      </a>
      <cr-icon-button id="actionMenuButton" class="icon-more-vert" tabindex="0" title="More actions for Roblox shortcut" data-index="3" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <cr-icon-button id="removeButton" class="icon-clear" tabindex="0" title="Remove" hidden="" data-index="3" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <div class="tile-icon">
        <img draggable="false" alt="" src="chrome://favicon2/?size=24&amp;scaleFactor=1x&amp;showFallbackMonogram=&amp;pageUrl=https%3A%2F%2Fwww.roblox.com%2F">
        <div class="query-tile-icon" draggable="false" hidden=""></div>
      </div>
      <div class="tile-title title-ltr">
        <span><!--?lit$5812602783$-->Roblox</span>
      </div>
    </div>
  <!----><!---->
    <div class="tile" draggable="true" title="Inbox (523)" data-index="4">
      <a draggable="false" href="http://gmail.com/" aria-label="Inbox (523)">
      </a>
      <cr-icon-button id="actionMenuButton" class="icon-more-vert" tabindex="0" title="More actions for Inbox (523) shortcut" data-index="4" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <cr-icon-button id="removeButton" class="icon-clear" tabindex="0" title="Remove" hidden="" data-index="4" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <div class="tile-icon">
        <img draggable="false" alt="" src="chrome://favicon2/?size=24&amp;scaleFactor=1x&amp;showFallbackMonogram=&amp;pageUrl=http%3A%2F%2Fgmail.com%2F">
        <div class="query-tile-icon" draggable="false" hidden=""></div>
      </div>
      <div class="tile-title title-ltr">
        <span><!--?lit$5812602783$-->Inbox (523)</span>
      </div>
    </div>
  <!----><!---->
    <div class="tile" draggable="true" title="TikTok" data-index="5">
      <a draggable="false" href="https://www.tiktok.com/" aria-label="TikTok">
      </a>
      <cr-icon-button id="actionMenuButton" class="icon-more-vert" tabindex="0" title="More actions for TikTok shortcut" data-index="5" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <cr-icon-button id="removeButton" class="icon-clear" tabindex="0" title="Remove" hidden="" data-index="5" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <div class="tile-icon">
        <img draggable="false" alt="" src="chrome://favicon2/?size=24&amp;scaleFactor=1x&amp;showFallbackMonogram=&amp;pageUrl=https%3A%2F%2Fwww.tiktok.com%2F">
        <div class="query-tile-icon" draggable="false" hidden=""></div>
      </div>
      <div class="tile-title title-ltr">
        <span><!--?lit$5812602783$-->TikTok</span>
      </div>
    </div>
  <!----><!---->
    <div class="tile" draggable="true" title="spotify" data-index="6">
      <a draggable="false" href="https://open.spotify.com/" aria-label="spotify">
      </a>
      <cr-icon-button id="actionMenuButton" class="icon-more-vert" tabindex="0" title="More actions for spotify shortcut" data-index="6" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <cr-icon-button id="removeButton" class="icon-clear" tabindex="0" title="Remove" hidden="" data-index="6" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="icon">
  <div id="maskedImage"></div>
</div></template></cr-icon-button>
      <div class="tile-icon">
        <img draggable="false" alt="" src="chrome://favicon2/?size=24&amp;scaleFactor=1x&amp;showFallbackMonogram=&amp;pageUrl=https%3A%2F%2Fopen.spotify.com%2F">
        <div class="query-tile-icon" draggable="false" hidden=""></div>
      </div>
      <div class="tile-title title-ltr">
        <span><!--?lit$5812602783$-->spotify</span>
      </div>
    </div>
  <!---->
  <cr-button id="addShortcut" tabindex="0" noink="" aria-label="Add shortcut" title="Add shortcut" role="button" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="background"></div>
<slot id="prefixIcon" name="prefix-icon">
</slot>
<span id="content"><slot></slot></span>
<slot id="suffixIcon" name="suffix-icon">
</slot>
<div id="hoverBackground" part="hoverBackground"></div></template>
    <div id="addShortcutIconContainer" class="tile-icon">
      <div id="addShortcutIcon" draggable="false"></div>
    </div>
    <div class="tile-title">
      <span><!--?lit$5812602783$-->Add shortcut</span>
    </div>
  </cr-button>
  <cr-dialog id="dialog"><template shadowrootmode="open"><!---->
<dialog id="dialog" part="dialog" aria-labelledby="title">
<!-- This wrapper is necessary, such that the "pulse" animation is not
    erroneously played when the user clicks on the outer-most scrollbar. -->
  <div id="content-wrapper" part="wrapper">
    <div class="top-container">
      <h2 id="title" class="title-container" tabindex="-1">
        <slot name="title"></slot>
      </h2>
      <!--?lit$5812602783$-->
    </div>
    <slot name="header"></slot>
    <div id="cr-container-shadow-top" class="cr-container-shadow"></div><div class="body-container" id="container" show-bottom-shadow="" part="body-container"><div></div><div></div>
      <slot name="body"></slot>
    <div></div><div></div></div><div id="cr-container-shadow-bottom" class="cr-container-shadow"></div>
    <slot name="button-container"></slot>
    <slot name="footer"></slot>
  </div>
</dialog></template>
    <div slot="title"><!--?lit$5812602783$--></div>
    <div slot="body" id="dialogContent">
      <cr-input id="dialogInputName" spellcheck="false" autofocus="" label="Name"><template shadowrootmode="open"><!---->
<div id="label" class="cr-form-field-label" aria-hidden="true">
  <!--?lit$5812602783$-->Name
</div>
<div id="row-container" part="row-container">
  <div id="input-container">
    <div id="inner-input-container">
      <div id="hover-layer"></div>
      <div id="inner-input-content">
        <slot name="inline-prefix"></slot>
        <input id="input" part="input" autocomplete="off" autofocus="" tabindex="0" type="text" maxlength="" minlength="" inputmode="" aria-label="Name" aria-invalid="false">
        <slot name="inline-suffix"></slot>
      </div>
    </div>
    <div id="underline-base"></div>
    <div id="underline"></div>
  </div>
  <slot name="suffix"></slot>
</div>
<div id="error" aria-live="assertive"><!--?lit$5812602783$--></div></template></cr-input>
      <cr-input id="dialogInputUrl" spellcheck="false" type="url" label="URL"><template shadowrootmode="open"><!---->
<div id="label" class="cr-form-field-label" aria-hidden="true">
  <!--?lit$5812602783$-->URL
</div>
<div id="row-container" part="row-container">
  <div id="input-container">
    <div id="inner-input-container">
      <div id="hover-layer"></div>
      <div id="inner-input-content">
        <slot name="inline-prefix"></slot>
        <input id="input" part="input" autocomplete="off" tabindex="0" type="url" maxlength="" minlength="" inputmode="" aria-label="URL" aria-invalid="false">
        <slot name="inline-suffix"></slot>
      </div>
    </div>
    <div id="underline-base"></div>
    <div id="underline"></div>
  </div>
  <slot name="suffix"></slot>
</div>
<div id="error" aria-live="assertive"><!--?lit$5812602783$--></div></template>
      </cr-input>
    </div>
    <div slot="button-container">
      <cr-button class="cancel-button" role="button" tabindex="0" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="background"></div>
<slot id="prefixIcon" name="prefix-icon">
</slot>
<span id="content"><slot></slot></span>
<slot id="suffixIcon" name="suffix-icon">
</slot>
<div id="hoverBackground" part="hoverBackground"></div></template>
        <!--?lit$5812602783$-->Cancel
      </cr-button>
      <cr-button class="action-button" disabled="" role="button" tabindex="-1" aria-disabled="true"><template shadowrootmode="open"><!---->
<div id="background"></div>
<slot id="prefixIcon" name="prefix-icon">
</slot>
<span id="content"><slot></slot></span>
<slot id="suffixIcon" name="suffix-icon">
</slot>
<div id="hoverBackground" part="hoverBackground"></div></template>
        <!--?lit$5812602783$-->Done
      </cr-button>
    </div>
  </cr-dialog>
  <cr-action-menu id="actionMenu"><template shadowrootmode="open"><!---->
<dialog id="dialog" part="dialog" role="application">
  <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1">
    <slot id="contentNode"></slot>
  </div>
</dialog></template>
    <button id="actionMenuEdit" class="dropdown-item" role="menuitem">
      <!--?lit$5812602783$-->Edit shortcut
    </button>
    <button id="actionMenuRemove" class="dropdown-item" role="menuitem">
      <!--?lit$5812602783$-->Remove
    </button>
  </cr-action-menu>
</div>
<cr-toast id="toast" duration="10000"><template shadowrootmode="open"><!----><slot></slot></template>
  <div><!--?lit$5812602783$--></div>
  <!--?lit$5812602783$-->
</cr-toast>
<!--_html_template_end_--></template>
      </cr-most-visited>
    
    <!--?lit$5812602783$-->
      <ntp-middle-slot-promo><template shadowrootmode="open"><!----><!--_html_template_start_-->
<div id="promoAndDismissContainer" hidden="">
  
  <!--?lit$5812602783$-->
</div>
<!--?lit$5812602783$-->
<cr-toast id="dismissPromoButtonToast" duration="10000"><template shadowrootmode="open"><!----><slot></slot></template>
  <div id="dismissPromoButtonToastMessage">
    You won't see this specific message again
  </div>
  <cr-button id="undoDismissPromoButton" aria-label="Press Ctrl+Z to undo" role="button" tabindex="0" aria-disabled="false"><template shadowrootmode="open"><!---->
<div id="background"></div>
<slot id="prefixIcon" name="prefix-icon">
</slot>
<span id="content"><slot></slot></span>
<slot id="suffixIcon" name="suffix-icon">
</slot>
<div id="hoverBackground" part="hoverBackground"></div></template>
    Undo
  </cr-button>
</cr-toast>
<!--_html_template_end_--></template>
      </ntp-middle-slot-promo>
    
    <!--?lit$5812602783$-->
    <a id="backgroundImageAttribution" href="chrome://new-tab-page/" hidden="">
      <div id="backgroundImageAttribution1Container">
        <div id="linkIcon" hidden=""></div>
        <div id="backgroundImageAttribution1">
          <!--?lit$5812602783$-->
        </div>
      </div>
      <div id="backgroundImageAttribution2" hidden="">
        <!--?lit$5812602783$-->
      </div>
    </a>
    <div id="customizeButtons">
      <!--?lit$5812602783$-->
      <cr-button id="customizeButton" class="customize-button" title="Customize this page" aria-pressed="false" role="button" tabindex="0" aria-disabled="false" data-native-id="NewTabPageUI::kCustomizeChromeButtonElementId" has-prefix-icon_=""><template shadowrootmode="open"><!---->
<div id="background"></div>
<slot id="prefixIcon" name="prefix-icon">
</slot>
<span id="content"><slot></slot></span>
<slot id="suffixIcon" name="suffix-icon">
</slot>
<div id="hoverBackground" part="hoverBackground"></div></template>
        <div id="customizeIcon" class="customize-icon cr-icon" slot="prefix-icon"></div>
        <div id="customizeText" class="customize-text">
          Customize Chrome
        </div>
      </cr-button>
    </div>
    <!--?lit$5812602783$-->
  
  <div id="contentBottomSpacer"></div>
</div>
<!--?lit$5812602783$-->
<svg>
  <defs>
    <clippath id="oneGoogleBarClipPath">
      
      
    <rect x="-8" y="-8" width="1381" height="80"></rect></clippath>
  </defs>
</svg>
<!--_html_template_end_--></template></ntp-app>
    <script type="module" src="chrome://new-tab-page/new_tab_page.js"></script>
    <link rel="stylesheet" href="chrome://resources/css/text_defaults_md.css">
    <link rel="stylesheet" href="chrome://theme/colors.css?sets=ui,chrome">
    <link rel="stylesheet" href="chrome://new-tab-page/shared_vars.css">
  

<script type="module" src="chrome://new-tab-page/lazy_load.js"></script></body></html>