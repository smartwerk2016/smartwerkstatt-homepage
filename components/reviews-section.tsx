import React from 'react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="bewertungen" className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header-Bereich */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              BEWERTUNGEN / 04
            </span>
            <h2 className="text-3xl font-bold mt-2 text-gray-900">
              Worauf Waiblingen vertraut.
            </h2>
          </div>
          
          {/* 5.0 Google Sterne Badge */}
          <div className="mt-4 md:mt-0 flex items-center bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl shadow-sm">
            <span className="text-2xl font-bold mr-3 text-gray-900">5,0</span>
            <div>
              <div className="flex text-yellow-500 text-sm">
                {'★★★★★'}
              </div>
              <span className="text-xs text-gray-500">450+ auf Google</span>
            </div>
          </div>
        </div>

        {/* 4 Bewertungs-Kacheln */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Karte 1 */}
          <article className="p-5 lg:p-6 flex flex-col justify-between border border-gray-200 rounded-xl bg-gray-50 shadow-sm">
            <div>
              <div className="flex text-yellow-500 mb-2">★★★★★</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Handy mit Wasserschaden abgegeben – alles sehr gut repariert, funktioniert top. Das Handy ist wie neu. Kann diesen Service nur weiterempfehlen!
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-200 text-sm font-semibold text-gray-900">
              <span>Michael S.</span>
              <span className="text-xs font-normal text-gray-500 bg-gray-200 px-2 py-1 rounded">WASSERSCHADEN</span>
            </div>
          </article>

          {/* Karte 2 */}
          <article className="p-5 lg:p-6 flex flex-col justify-between border border-gray-200 rounded-xl bg-gray-50 shadow-sm">
            <div>
              <div className="flex text-yellow-500 mb-2">★★★★★</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Komme seit Jahren zu Ahmet. Bester Service, immer nett, vernünftige Preise. Selten einen Laden gesehen, der über so lange Zeit Qualität und Service hält.
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-200 text-sm font-semibold text-gray-900">
              <span>Yves H.</span>
              <span className="text-xs font-normal text-gray-500 bg-gray-200 px-2 py-1 rounded">SEIT JAHREN</span>
            </div>
          </article>

          {/* Karte 3 */}
          <article className="p-5 lg:p-6 flex flex-col justify-between border border-gray-200 rounded-xl bg-gray-50 shadow-sm">
            <div>
              <div className="flex text-yellow-500 mb-2">★★★★★</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Mein Mac zum Display-Tausch – voll zufrieden. Preis/Leistung, Service und Kundengang auf professionellem Niveau. Schön, dass es solche...
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-200 text-sm font-semibold text-gray-900">
              <span>Holger B.</span>
              <span className="text-xs font-normal text-gray-500 bg-gray-200 px-2 py-1 rounded">MAC-DISPLAY</span>
            </div>
          </article>

          {/* Karte 4 */}
          <article className="p-5 lg:p-6 flex flex-col justify-between border border-gray-200 rounded-xl bg-gray-50 shadow-sm">
            <div>
              <div className="flex text-yellow-500 mb-2">★★★★★</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Es gibt Kurse für Senioren und es wird alles gut erklärt – vom Grundkurs zum Aufbaukurs, egal ob Samsung oder iPhone. Danke sehr!
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-200 text-sm font-semibold text-gray-900">
              <span>Brigitte P.</span>
              <span className="text-xs font-normal text-gray-500 bg-gray-200 px-2 py-1 rounded">SMARTPHONE-KURS</span>
            </div>
          </article>

        </div>

        {/* Google Link Button */}
        <div className="mt-10 text-center md:text-left">
          <a
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
          >
            Alle Bewertungen auf Google ansehen ↗
          </a>
        </div>

      </div>
    </section>
  );
};

