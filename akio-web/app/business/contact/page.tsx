export default function Contact() {
  return (
    <div className="content-container max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">How to reach me</h1>
      
      <p className="mb-8 text-lg">
        Feel free to reach out to akio.nuernberger@gmail.com
      </p>
      
      <div className="mt-8">
        <button
          data-cal-link="akionuernberger/15min"
          data-cal-namespace="15min"
          data-cal-config='{"layout":"month_view"}'
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        >
          Schedule a call
        </button>
      </div>

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if(typeof namespace === "string"){
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "15min", {origin:"https://cal.com"});
            Cal.ns["15min"]("ui", {
              "styles":{"branding":{"brandColor":"#ffffff"}},
              "hideEventTypeDetails":false,
              "layout":"month_view"
            });
          `
        }}
      />
    </div>
  )
}