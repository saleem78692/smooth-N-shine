const pages = {
  dashboard: {
    title: "Dashboard",
    html: `
    <div class="page-head">
      <div><h2>Your Care Dashboard</h2><p>Track your appointments, treatments and wellness journey.</p></div>
      <button class="btn-primary-custom" data-page="appointments"><i class="bi bi-plus-lg"></i> Book Appointment</button>
    </div>

    <div class="stats-grid">
      <div class="card-custom stat-card"><div><small>Upcoming</small><h3>02</h3><p><i class="bi bi-arrow-up"></i> Next appointment soon</p></div><div class="stat-icon"><i class="bi bi-calendar2-check"></i></div></div>
      <div class="card-custom stat-card"><div><small>Completed</small><h3>08</h3><p><i class="bi bi-check2"></i> Treatments completed</p></div><div class="stat-icon"><i class="bi bi-stars"></i></div></div>
      <div class="card-custom stat-card"><div><small>Active Plan</small><h3>01</h3><p><i class="bi bi-activity"></i> Plan in progress</p></div><div class="stat-icon"><i class="bi bi-clipboard2-pulse"></i></div></div>
      <div class="card-custom stat-card"><div><small>Pending Bills</small><h3>₹2,500</h3><p style="color:var(--warning)"><i class="bi bi-clock"></i> Due this month</p></div><div class="stat-icon"><i class="bi bi-credit-card"></i></div></div>
    </div>

    <div class="grid-2">
      <div class="card-custom">
        <div class="card-head"><h3>Next Appointment</h3><a href="#appointments" data-page="appointments">View all</a></div>
        <div class="card-body">
          <div class="appointment-feature">
            <div class="date-box"><span>SEP</span><strong>18</strong></div>
            <div><h4>Laser Hair Reduction</h4><p><i class="bi bi-clock"></i> 04:30 PM &nbsp; · &nbsp; Smooth N Shine Clinic</p><span class="status confirmed mt-2">Confirmed</span></div>
          </div>
        </div>
      </div>
      <div class="card-custom">
        <div class="card-head"><h3>Quick Actions</h3></div>
        <div class="card-body">
          <div class="quick-grid">
            <a href="#appointments" data-page="appointments" class="quick-action"><i class="bi bi-calendar-plus"></i> Book Visit</a>
            <a href="#prescriptions" data-page="prescriptions" class="quick-action"><i class="bi bi-capsule"></i> Prescription</a>
            <a href="#reports" data-page="reports" class="quick-action"><i class="bi bi-file-earmark-text"></i> My Reports</a>
            <a href="#payments" data-page="payments" class="quick-action"><i class="bi bi-receipt"></i> Pay Bill</a>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-2 mt-3">
      <div class="card-custom">
        <div class="card-head"><h3>My Treatments</h3><a href="#treatments" data-page="treatments">View all</a></div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-6"><div class="treatment-card border"><div class="treatment-img"><span>Laser Hair Reduction</span></div><div class="d-flex justify-content-between mt-3"><strong style="font-size:11px">Progress</strong><small style="font-size:10px;color:var(--muted)">70%</small></div><div class="progress mt-2"><div class="progress-bar" style="width:70%"></div></div></div></div>
            <div class="col-md-6"><div class="treatment-card border"><div class="treatment-img"><span>Skin Rejuvenation</span></div><div class="d-flex justify-content-between mt-3"><strong style="font-size:11px">Progress</strong><small style="font-size:10px;color:var(--muted)">45%</small></div><div class="progress mt-2"><div class="progress-bar" style="width:45%"></div></div></div></div>
          </div>
        </div>
      </div>
      <div class="card-custom">
        <div class="card-head"><h3>Recent Activity</h3></div>
        <div class="card-body"><div class="timeline">
          <div class="timeline-item"><h4>Appointment confirmed</h4><p>Laser Hair Reduction · Sep 18, 2026</p></div>
          <div class="timeline-item"><h4>Payment received</h4><p>₹3,500 paid for Skin Rejuvenation</p></div>
          <div class="timeline-item"><h4>Prescription uploaded</h4><p>Post-treatment care prescription added</p></div>
        </div></div>
      </div>
    </div>`,
  },
  appointments: {
    title: "My Appointments",
    html: `
 <div class="page-head"><div><h2>My Appointments</h2><p>Manage upcoming and previous appointments.</p></div><button class="btn-primary-custom"><i class="bi bi-plus-lg"></i> Book New Appointment</button></div>
 <div class="card-custom table-wrap"><table class="custom-table"><thead><tr><th>Date</th><th>Treatment</th><th>Specialist</th><th>Time</th><th>Status</th><th>Action</th></tr></thead><tbody>
 <tr><td><strong>18 Sep 2026</strong></td><td>Laser Hair Reduction</td><td>Dr. Smriti</td><td>04:30 PM</td><td><span class="status confirmed">Confirmed</span></td><td><button class="btn-light-custom">Details</button></td></tr>
 <tr><td><strong>26 Sep 2026</strong></td><td>Skin Rejuvenation</td><td>Dr. Smriti</td><td>05:00 PM</td><td><span class="status pending">Pending</span></td><td><button class="btn-light-custom">Details</button></td></tr>
 <tr><td>05 Aug 2026</td><td>Facial Treatment</td><td>Care Team</td><td>03:00 PM</td><td><span class="status completed">Completed</span></td><td><button class="btn-light-custom">View</button></td></tr>
 <tr><td>12 Jul 2026</td><td>Body Contouring</td><td>Care Team</td><td>06:00 PM</td><td><span class="status completed">Completed</span></td><td><button class="btn-light-custom">View</button></td></tr>
 </tbody></table></div>`,
  },
  treatments: {
    title: "My Treatments",
    html: `
 <div class="page-head"><div><h2>My Treatments</h2><p>A complete overview of your ongoing and completed treatments.</p></div></div>
 <div class="section-grid">
 <div class="card-custom treatment-card"><div class="treatment-img"><span>Laser Hair Reduction</span></div><h3 class="mt-3">Laser Hair Reduction</h3><p style="font-size:10px;color:var(--muted)">Underarm & full arms · 10 sessions</p><div class="d-flex justify-content-between"><small>7 of 10 sessions</small><strong style="font-size:10px">70%</strong></div><div class="progress mt-2"><div class="progress-bar" style="width:70%"></div></div><button class="btn-light-custom w-100 mt-3">View Treatment</button></div>
 <div class="card-custom treatment-card"><div class="treatment-img"><span>Skin Rejuvenation</span></div><h3 class="mt-3">Skin Rejuvenation</h3><p style="font-size:10px;color:var(--muted)">Glow & texture care · 6 sessions</p><div class="d-flex justify-content-between"><small>3 of 6 sessions</small><strong style="font-size:10px">50%</strong></div><div class="progress mt-2"><div class="progress-bar" style="width:50%"></div></div><button class="btn-light-custom w-100 mt-3">View Treatment</button></div>
 <div class="card-custom treatment-card"><div class="treatment-img"><span>Body Contouring</span></div><h3 class="mt-3">Body Contouring</h3><p style="font-size:10px;color:var(--muted)">Targeted contouring · 4 sessions</p><div class="d-flex justify-content-between"><small>4 of 4 sessions</small><strong style="font-size:10px">100%</strong></div><div class="progress mt-2"><div class="progress-bar" style="width:100%"></div></div><button class="btn-light-custom w-100 mt-3">View Treatment</button></div>
 </div>`,
  },
  "treatment-plan": {
    title: "Treatment Plan",
    html: `
 <div class="page-head"><div><h2>Your Treatment Plan</h2><p>Your personalised care roadmap prepared by the Smooth N Shine team.</p></div><button class="btn-light-custom"><i class="bi bi-download"></i> Download Plan</button></div>
 <div class="grid-2">
 <div class="card-custom"><div class="card-head"><h3>Personalised Roadmap</h3><span class="status confirmed">Active</span></div><div class="card-body"><div class="plan-step"><div class="step-number">01</div><div class="step-content"><h4>Skin Assessment</h4><p>Initial consultation and personalised skin assessment completed on 04 Aug 2026.</p></div></div><div class="plan-step"><div class="step-number">02</div><div class="step-content"><h4>Laser Hair Reduction</h4><p>10 sessions planned with 4–6 week intervals. 7 sessions completed.</p></div></div><div class="plan-step"><div class="step-number">03</div><div class="step-content"><h4>Skin Rejuvenation</h4><p>Six-session programme focused on texture, brightness and overall skin quality.</p></div></div><div class="plan-step"><div class="step-number">04</div><div class="step-content"><h4>Review & Maintenance</h4><p>Final review and maintenance recommendations after completion.</p></div></div></div></div>
 <div class="card-custom"><div class="card-head"><h3>Plan Summary</h3></div><div class="card-body"><div class="detail-list"><div class="detail-item"><span>Plan started</span><strong>04 Aug 2026</strong></div><div class="detail-item"><span>Expected completion</span><strong>Dec 2026</strong></div><div class="detail-item"><span>Sessions completed</span><strong>10 / 16</strong></div><div class="detail-item"><span>Overall progress</span><strong>62%</strong></div><div class="detail-item"><span>Care coordinator</span><strong>Smooth N Shine Team</strong></div></div><div class="progress mt-3"><div class="progress-bar" style="width:62%"></div></div></div></div></div>`,
  },
  "before-after": {
    title: "Before & After",
    html: `
 <div class="page-head"><div><h2>Before & After</h2><p>Private treatment progress photos stored securely in your account.</p></div></div>
 <div class="gallery">
 <div class="gallery-card"><img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"><div class="gallery-label">Skin Rejuvenation · Before</div></div>
 <div class="gallery-card"><img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"><div class="gallery-label">Skin Rejuvenation · After</div></div>
 <div class="gallery-card"><img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"><div class="gallery-label">Facial Treatment · Before</div></div>
 <div class="gallery-card"><img src="https://images.unsplash.com/photo-1556229010-aa3b3e2d8e13?auto=format&fit=crop&w=800&q=80"><div class="gallery-label">Facial Treatment · After</div></div>
 <div class="gallery-card"><img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"><div class="gallery-label">Treatment Progress · Before</div></div>
 <div class="gallery-card"><img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80"><div class="gallery-label">Treatment Progress · After</div></div>
 </div>`,
  },
  prescriptions: {
    title: "Prescriptions",
    html: `
 <div class="page-head"><div><h2>My Prescriptions</h2><p>Access prescriptions and post-treatment care instructions.</p></div></div>
 <div class="document-grid">
 <div class="card-custom doc-card"><div class="doc-icon"><i class="bi bi-capsule"></i></div><div><h4>Post Laser Care Prescription</h4><p>Issued · 18 Aug 2026</p></div><a class="download" href="#"><i class="bi bi-download"></i></a></div>
 <div class="card-custom doc-card"><div class="doc-icon"><i class="bi bi-capsule"></i></div><div><h4>Skin Rejuvenation Care</h4><p>Issued · 05 Aug 2026</p></div><a class="download" href="#"><i class="bi bi-download"></i></a></div>
 <div class="card-custom doc-card"><div class="doc-icon"><i class="bi bi-file-medical"></i></div><div><h4>Daily Skin Care Routine</h4><p>Issued · 04 Aug 2026</p></div><a class="download" href="#"><i class="bi bi-download"></i></a></div>
 </div>`,
  },
  reports: {
    title: "Reports & Documents",
    html: `
 <div class="page-head"><div><h2>Reports & Documents</h2><p>All your treatment reports and important documents in one place.</p></div><button class="btn-light-custom"><i class="bi bi-upload"></i> Upload Document</button></div>
 <div class="card-custom table-wrap"><table class="custom-table"><thead><tr><th>Document</th><th>Category</th><th>Date</th><th>Size</th><th>Action</th></tr></thead><tbody>
 <tr><td><i class="bi bi-file-earmark-pdf me-2" style="color:#b95050"></i> Skin Assessment Report</td><td>Assessment</td><td>04 Aug 2026</td><td>1.2 MB</td><td><button class="btn-light-custom"><i class="bi bi-download"></i></button></td></tr>
 <tr><td><i class="bi bi-file-earmark-pdf me-2" style="color:#b95050"></i> Treatment Progress Report</td><td>Treatment</td><td>18 Aug 2026</td><td>850 KB</td><td><button class="btn-light-custom"><i class="bi bi-download"></i></button></td></tr>
 <tr><td><i class="bi bi-file-earmark-pdf me-2" style="color:#b95050"></i> Consultation Notes</td><td>Consultation</td><td>04 Aug 2026</td><td>560 KB</td><td><button class="btn-light-custom"><i class="bi bi-download"></i></button></td></tr>
 </tbody></table></div>`,
  },
  payments: {
    title: "Bills & Payments",
    html: `
 <div class="page-head"><div><h2>Bills & Payments</h2><p>View invoices, payment history and pending balances.</p></div></div>
 <div class="grid-2">
 <div class="payment-total"><small>Outstanding balance</small><h2>₹2,500</h2><p>One invoice is currently pending.</p><button class="btn-primary-custom mt-4" style="background:#fff;color:var(--ink)">Pay Now <i class="bi bi-arrow-right"></i></button></div>
 <div class="card-custom"><div class="card-head"><h3>Payment Summary</h3></div><div class="card-body"><div class="detail-list"><div class="detail-item"><span>Total treatment value</span><strong>₹28,500</strong></div><div class="detail-item"><span>Paid amount</span><strong>₹26,000</strong></div><div class="detail-item"><span>Pending amount</span><strong style="color:var(--danger)">₹2,500</strong></div></div></div></div>
 </div>
 <div class="card-custom mt-3 table-wrap"><div class="card-head"><h3>Payment History</h3></div><table class="custom-table"><thead><tr><th>Invoice</th><th>Treatment</th><th>Date</th><th>Amount</th><th>Status</th><th>Receipt</th></tr></thead><tbody>
 <tr><td>#SNS-1024</td><td>Laser Hair Reduction</td><td>18 Aug 2026</td><td>₹3,500</td><td><span class="status confirmed">Paid</span></td><td><button class="btn-light-custom"><i class="bi bi-download"></i></button></td></tr>
 <tr><td>#SNS-1011</td><td>Skin Rejuvenation</td><td>05 Aug 2026</td><td>₹7,500</td><td><span class="status confirmed">Paid</span></td><td><button class="btn-light-custom"><i class="bi bi-download"></i></button></td></tr>
 <tr><td>#SNS-1041</td><td>Upcoming Treatment</td><td>01 Sep 2026</td><td>₹2,500</td><td><span class="status pending">Pending</span></td><td><button class="btn-primary-custom">Pay</button></td></tr>
 </tbody></table></div>`,
  },
  notifications: {
    title: "Notifications",
    html: `
 <div class="page-head"><div><h2>Notifications</h2><p>Stay updated with appointments, payments and treatment reminders.</p></div><button class="btn-light-custom">Mark all as read</button></div>
 <div class="notification-list">
 <div class="notification-item unread"><i class="bi bi-calendar-check"></i><div><h4>Appointment confirmed</h4><p>Your Laser Hair Reduction appointment is confirmed for 18 Sep 2026 at 04:30 PM.</p><time>10 minutes ago</time></div></div>
 <div class="notification-item unread"><i class="bi bi-credit-card"></i><div><h4>Payment reminder</h4><p>You have a pending balance of ₹2,500 for your upcoming treatment.</p><time>2 hours ago</time></div></div>
 <div class="notification-item unread"><i class="bi bi-capsule"></i><div><h4>New prescription available</h4><p>Your post-treatment care prescription has been uploaded.</p><time>Yesterday</time></div></div>
 <div class="notification-item"><i class="bi bi-stars"></i><div><h4>Treatment progress updated</h4><p>Your Laser Hair Reduction progress has been updated to 70%.</p><time>05 Sep 2026</time></div></div>
 </div>`,
  },
  reviews: {
    title: "Reviews & Feedback",
    html: `
 <div class="page-head"><div><h2>Reviews & Feedback</h2><p>Share your experience and help us improve your care.</p></div><button class="btn-primary-custom"><i class="bi bi-star"></i> Write a Review</button></div>
 <div class="grid-2">
 <div class="card-custom"><div class="card-head"><h3>Your Recent Reviews</h3></div><div class="card-body"><div class="mb-4"><div class="review-stars">★★★★★</div><h4 style="font-size:13px;margin:7px 0">Laser Hair Reduction</h4><p style="font-size:10px;color:var(--muted);line-height:1.7">“Very professional team and a comfortable experience. The staff explained every step clearly.”</p><small style="font-size:9px;color:#999">Posted · 20 Aug 2026</small></div><hr><div><div class="review-stars">★★★★☆</div><h4 style="font-size:13px;margin:7px 0">Skin Rejuvenation</h4><p style="font-size:10px;color:var(--muted);line-height:1.7">“Good experience and excellent follow-up support.”</p><small style="font-size:9px;color:#999">Posted · 12 Aug 2026</small></div></div></div>
 <div class="card-custom"><div class="card-head"><h3>Leave Feedback</h3></div><div class="card-body"><label class="form-label-custom">Treatment</label><select class="form-select-custom mb-3"><option>Laser Hair Reduction</option><option>Skin Rejuvenation</option><option>Body Contouring</option></select><label class="form-label-custom">Rating</label><div class="review-stars fs-5 mb-3">★★★★★</div><label class="form-label-custom">Your feedback</label><textarea class="form-control-custom" rows="5" placeholder="Tell us about your experience..."></textarea><button class="btn-primary-custom mt-3">Submit Feedback</button></div></div>
 </div>`,
  },
  profile: {
    title: "My Profile",
    html: `
 <div class="page-head"><div><h2>My Profile</h2><p>Manage your personal and contact information.</p></div><button class="btn-primary-custom"><i class="bi bi-check2"></i> Save Changes</button></div>
 <div class="card-custom overflow-hidden"><div class="profile-cover"></div><div class="profile-main"><div class="profile-big">MS</div><h2>Mr. Saleem</h2><p>Premium Member · Customer ID #SNS-2048</p><div class="row g-3"><div class="col-md-6"><label class="form-label-custom">Full Name</label><input class="form-control-custom" value="Mr. Saleem"></div><div class="col-md-6"><label class="form-label-custom">Email Address</label><input class="form-control-custom" value="saleem@example.com"></div><div class="col-md-6"><label class="form-label-custom">Mobile Number</label><input class="form-control-custom" value="+91 98XXXXXX10"></div><div class="col-md-6"><label class="form-label-custom">Date of Birth</label><input class="form-control-custom" value="15 May 1999"></div><div class="col-md-6"><label class="form-label-custom">City</label><input class="form-control-custom" value="Agra"></div><div class="col-md-6"><label class="form-label-custom">Preferred Contact</label><select class="form-select-custom"><option>WhatsApp</option><option>Phone</option><option>Email</option></select></div></div></div></div>`,
  },
  settings: {
    title: "Settings",
    html: `
 <div class="page-head"><div><h2>Settings</h2><p>Control notifications, privacy and account preferences.</p></div></div>
 <div class="card-custom"><div class="card-body">
 <div class="settings-row"><div><h4>Appointment reminders</h4><p>Receive reminders before your appointments.</p></div><label class="switch"><input type="checkbox" checked><span class="slider"></span></label></div>
 <div class="settings-row"><div><h4>Payment notifications</h4><p>Get notified about invoices and pending payments.</p></div><label class="switch"><input type="checkbox" checked><span class="slider"></span></label></div>
 <div class="settings-row"><div><h4>Treatment updates</h4><p>Receive progress and care-plan updates.</p></div><label class="switch"><input type="checkbox" checked><span class="slider"></span></label></div>
 <div class="settings-row"><div><h4>Promotional messages</h4><p>Receive offers, new treatment and wellness updates.</p></div><label class="switch"><input type="checkbox"><span class="slider"></span></label></div>
 <div class="settings-row"><div><h4>Two-step login</h4><p>Add an extra security layer to your account.</p></div><button class="btn-light-custom">Enable</button></div>
 </div></div>`,
  },
  logout: {
    title: "Logout",
    html: `<div class="card-custom empty-state"><i class="bi bi-box-arrow-right"></i><h3>Ready to leave?</h3><p>You can safely sign out of your Smooth N Shine account. Your appointments, treatments and documents will remain saved.</p><button class="btn-primary-custom" onclick="alert('Logout action can be connected to your backend here.')">Confirm Logout</button></div>`,
  },
};

const pageContent = document.getElementById("pageContent");
const pageTitle = document.getElementById("pageTitle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");

function loadPage(page) {
  const key = pages[page] ? page : "dashboard";
  pageContent.innerHTML = pages[key].html;
  pageTitle.textContent = pages[key].title;
  document
    .querySelectorAll(".nav-link")
    .forEach((a) => a.classList.toggle("active", a.dataset.page === key));
  if (location.hash !== "#" + key) history.replaceState(null, "", "#" + key);
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-page]");
  if (target) {
    e.preventDefault();
    loadPage(target.dataset.page);
  }
});

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}
document.getElementById("menuToggle").addEventListener("click", () => {
  sidebar.classList.add("open");
  overlay.classList.add("show");
});
document.getElementById("sidebarClose").addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

window.addEventListener("hashchange", () => {
  loadPage(location.hash.replace("#", "") || "dashboard");
});

loadPage(location.hash.replace("#", "") || "dashboard");
