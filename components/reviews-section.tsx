export default function ReviewsSection() {
  return (
    <section id="bewertungen" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Bewertungen / 04
          </span>
          <h2 className="text-3xl font-bold mt-2 text-gray-900">
            Worauf Waiblingen vertraut.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Beispiel-Bewertung 1 */}
          <div className="p-6 border rounded-xl shadow-sm bg-gray-50 flex flex-col justify-between">
            <div>
              <div className="flex text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-700 text-sm mb-4">
                „Smartwatch-Akku aufgebläht – andere haben gleich abgewunken. Hier wurde super geholfen. Er versucht es und gibt sich Mühe, den Kunden gerecht zu werden...“
              </p>
            </div>
            <div className="text-sm font-semibold text-gray-900">
              Florian R. <span className="text-xs font-normal text-gray-500 block">Smartwatch</span>
            </div>
          </div>

          {/* Beispiel-Bewertung 2 */}
          <div className="p-6 border rounded-xl shadow-sm bg-gray-50 flex flex-col justify-between">
            <div>
              <div className="flex text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-700 text-sm mb-4">
                „Handy ließ sich plötzlich nicht mehr bedienen, ich war dringend darauf angewiesen. In weniger als einer Stunde war das Problem behoben. Vielen lieben...“
              </p>
            </div>
            <div className="text-sm font-semibold text-gray-900">
              Sarah M. <span className="text-xs font-normal text-gray-500 block">Express-Hilfe</span>
            </div>
          </div>

          {/* Beispiel-Bewertung 3 */}
          <div className="p-6 border rounded-xl shadow-sm bg-gray-50 flex flex-col justify-between">
            <div>
              <div className="flex text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-700 text-sm mb-4">
                „Danke für den schnellen und unkomplizierten Display-Tausch. Die beste Handywerkstatt in Waiblingen und Umgebung. Nur zu empfehlen!“
              </p>
            </div>
            <div className="text-sm font-semibold text-gray-900">
              Pascal W. <span className="text-xs font-normal text-gray-500 block">Display-Tausch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Von meinem iPhone gesendet
