from django.conf.urls import include, url

from edu_app.views import UserSignUpView,UserAPIList,UserAPIDetail

urlpatterns = [
    url(r'^$',UserSignUpView.as_view(), name='tutor-signup'),
    url(r'^api/users/$',UserAPIList.as_view(), name='tutor-api'),
    url(r'^api/users/(?P<pk>[0-9]+)/$',UserAPIDetail.as_view(), name='tutor-api-detail')
]
